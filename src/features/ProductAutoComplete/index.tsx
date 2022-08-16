import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import { useState } from 'react'
import { useSearchProductQuery } from './api'
import Router from 'next/router'

export default function ProductSearchAutoComplete() {
  const [searchQuery, setsearchQuery] = useState<string>('')

  const { data, isLoading, isFetching } = useSearchProductQuery(searchQuery)

  const [open, setOpen] = useState(false)

  //   useEffect(() => {
  //     if (!open) {
  //       setOptions([])
  //     }
  //   }, [open])()

  const handleOnChange = (slug: string) => {
    Router.push(`/products/${slug}`)
  }

  return (
    <Autocomplete
      id='asynchronous-demo'
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option, value) => option.slug === value.slug}
      getOptionLabel={option => option.name}
      options={data || []}
      loading={isLoading || isFetching}
      onChange={(e, value) => {
        if (value?.slug) handleOnChange(value?.slug)
      }}
      renderInput={params => (
        <TextField
          onChange={e => {
            setsearchQuery(e.currentTarget.value)
          }}
          {...params}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading || isFetching ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      )}
    />
  )
}
