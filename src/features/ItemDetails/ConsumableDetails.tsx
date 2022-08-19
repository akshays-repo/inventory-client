import React, { FC, useRef } from 'react'
import { useConsumableStocks } from './itemDetailsHook'
import { ConsumableDetails } from './productDetails.type'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { debounce } from 'lodash'
import { useForm } from 'react-hook-form'
import ErrorField, { InputClassName, LabelClassName } from './Components'

type Props = {
  slug: string
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  // textAlign: 'center',
  color: theme.palette.text.secondary
}))

const ConsumableDetails: FC<Props> = ({ slug }) => {
  const { consumableIsloading, consumableDetails, updateConsumableDetail } = useConsumableStocks(slug)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ConsumableDetails>()

  const handleDataSave = async (newConsumable: ConsumableDetails, oldConsumble: ConsumableDetails | undefined) => {
    if (oldConsumble) {
      newConsumable.id = oldConsumble.id
      await updateConsumableDetail(newConsumable)
    }
  }

  const debouncedSave = useRef(
    debounce((consumable, oldConsumble) => handleDataSave(consumable, oldConsumble), 1000)
  ).current

  const handleInputChange = (consumable: ConsumableDetails) => {
    debouncedSave(consumable, consumableDetails)
  }
  if (consumableIsloading) {
    return <div>Loading... </div>
  }

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
                {...register('quntity', { required: true, value: consumableDetails?.quntity })}
                className={InputClassName}
              />
              {errors.quntity && <ErrorField errorMessage={errors.quntity.message || 'This field is required'} />}
            </Item>
          </Grid>
        </Grid>
      </form>
    </div>
  )

  // return <div> Something went wrong</div>
}

export default ConsumableDetails
