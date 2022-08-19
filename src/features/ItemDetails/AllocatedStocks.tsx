import { Button } from '@mui/material'
import React, { FC, useRef } from 'react'
import { useAllocatedStocks } from './itemDetailsHook'
import { debounce } from 'lodash'
import { useForm } from 'react-hook-form'
import { AllocatedDetails } from './productDetails.type'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ErrorField, { InputClassName, LabelClassName } from './Components'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  // textAlign: 'center',
  color: theme.palette.text.secondary
}))

type Props = {
  slug: string
}

const AllocatedStocks: FC<Props> = ({ slug }) => {
  const {
    allocatedIsLoading,
    allocatedDetails,
    allocatedDetailsRefetch,
    allocatedIsSuccess,
    allocatedIsError,
    updateAllocatedDetail
  } = useAllocatedStocks(slug)

  console.log('In Component', allocatedDetails)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AllocatedDetails>()

  const handleDataSave = async (newAllocated: AllocatedDetails, oldAllocated: AllocatedDetails | undefined) => {
    if (oldAllocated) {
      newAllocated.id = oldAllocated.id
      await updateAllocatedDetail(newAllocated)
    }
  }

  const debouncedSave = useRef(
    debounce((productDetails, oldAllocated) => handleDataSave(productDetails, oldAllocated), 1000)
  ).current

  const handleInputChange = (alllocated: AllocatedDetails) => {
    debouncedSave(alllocated, allocatedDetails)
  }
  if (allocatedIsLoading) {
    return <div>Loading... </div>
  }
  if (allocatedIsError) {
    return <div>Error...</div>
  }
  if (allocatedIsSuccess)
    return (
      <div>
        <form onChange={handleSubmit(handleInputChange)} onSubmit={handleSubmit(handleInputChange)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                {' '}
                <label htmlFor='default-input' className={LabelClassName}>
                  Quantity{' '}
                </label>
                <input
                  type='number'
                  id='default-input'
                  {...register('quntity', { required: true, value: allocatedDetails?.quntity })}
                  className={InputClassName}
                />
                {errors.quntity && <ErrorField errorMessage={errors.quntity.message || 'This field is required'} />}
              </Item>
            </Grid>
          </Grid>
        </form>
      </div>
    )

  return <div> Something went wrong</div>
}

export default AllocatedStocks
