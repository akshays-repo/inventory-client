import { Grid } from '@mui/material'
import { debounce } from 'lodash'
import { FC, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ErrorField, { InputClassName, LabelClassName } from './Components'
import { useProductDetails } from './itemDetailsHook'
import { ProductDetails } from './productDetails.type'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

type Props = {
  slug: string
  productDetails: ProductDetails
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  // textAlign: 'center',
  color: theme.palette.text.secondary
}))

const ProductDetailsForm: FC<Props> = ({ slug, productDetails }) => {
  const { updateProductDetail } = useProductDetails(slug)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: productDetails })

  const handleDataSave = async (productDetails: ProductDetails) => {
    console.log({ productDetails })
    await updateProductDetail(productDetails).unwrap()
  }

  const debouncedSave = useRef(debounce(productDetails => handleDataSave(productDetails), 1000)).current

  const handleInputChange = (productDetails: ProductDetails) => {
    debouncedSave(productDetails)
  }

  return (
    <div>
      <form onChange={handleSubmit(handleInputChange)} onSubmit={handleSubmit(handleInputChange)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              {' '}
              <label htmlFor='default-input' className={LabelClassName}>
                Product name
              </label>
              <input
                type='text'
                id='default-input'
                {...register('name', { required: true })}
                className={InputClassName}
              />
              {errors.name && <ErrorField errorMessage={errors.name.message || 'This field is required'} />}
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              {' '}
              <label htmlFor='default-input' className={LabelClassName}>
                Manufature
              </label>
              <input {...register('manufature', { required: true })} className={InputClassName} />
              {errors.manufature && <span>This field is required</span>}
            </Item>
          </Grid>
          <Grid item xs={12} md={2}>
            <Item>
              {' '}
              <label htmlFor='default-input' className={LabelClassName}>
                Price
              </label>
              <div className='flex'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                  ₹
                </span>
                <input
                  type='text'
                  {...register('price', { required: true })}
                  className='rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.manufature && <span>This field is required</span>}
              </div>
              {/* <input {...register('price', { required: true })} className={InputClassName} /> */}
            </Item>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default ProductDetailsForm
