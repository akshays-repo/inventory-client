// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form'
import { CategoreyType, FolderSending } from './folder.type'

import * as yup from 'yup'
import { useFolders } from './fetchHooks'

// ** Icons Imports

type TfolderCreation = {
  handleClose: () => void
  type: CategoreyType | undefined
}

const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.number().required(),
  thumbNailImage: yup.string()
})

const FolderCreationForm: FC<TfolderCreation> = ({ handleClose, type }) => {
  const { addFolder, refetch } = useFolders()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FolderSending>({
    resolver: yupResolver(schema),
    defaultValues: {
      type: type && type[0].id
    }
  })

  const postHandler = async (folderSending: FolderSending) => {
    try {
      await addFolder(folderSending).unwrap()
      refetch()
      handleClose()
    } catch (error) {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit(data => postHandler(data))}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='Folder name'
                  error={errors.name?.message ? true : false}
                  helperText={errors.name?.message ?? 'eg: Cookies'}
                />
              )}
              name='name'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='Folder thumbnail image url'
                  error={errors.thumbNailImage?.message ? true : false}
                  helperText={errors.thumbNailImage?.message ?? 'eg: Image url'}
                />
              )}
              name='thumbNailImage'
              control={control}
            />
          </Grid>{' '}
          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <RadioGroup placeholder='Select categoty type' aria-label='Cateogory type' {...field}>
                  {type?.map(t => (
                    <FormControlLabel key={t.id} value={t.id} control={<Radio />} label={t.name} />
                  ))}
                </RadioGroup>
              )}
              name='type'
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                gap: 5,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button type='submit' variant='contained' size='large'>
                Create Folder
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default FolderCreationForm
