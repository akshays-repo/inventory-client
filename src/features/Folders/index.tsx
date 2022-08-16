import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import FolderPlus from 'mdi-material-ui/FolderPlus'
import { useState } from 'react'
import { useFolders } from './fetchHooks'
import { useGetFoldersTypeQuery } from './folderApi'
import FolderCard from './FolderCard'
import FolderCreationForm from './FolderCreationForm'

const FoldersFeature = () => {
  const { data } = useFolders()

  const folderType = useGetFoldersTypeQuery()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Card>
        <CardHeader
          title='Folders'
          action={
            <Button variant='contained' endIcon={<FolderPlus />} onClick={handleClickOpen}>
              New Folder
            </Button>
          }
          subheader={
            <Typography variant='body2'>
              <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                Total 48.5% growth
              </Box>{' '}
              😎 this month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: '2rem !important',
              letterSpacing: '0.15px !important'
            }
          }}
        />
        <CardContent>
          <Grid container spacing={6}>
            {data?.map(folder => (
              <Grid key={folder.id} item xs={12} sm={6} md={3}>
                <FolderCard title={folder.name} image={folder.thumbNailImage} />
              </Grid>
            ))}
          </Grid>
        </CardContent>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{'Create New Folder'}</DialogTitle>
          <DialogContent>
            <FolderCreationForm
              handleClose={() => {
                handleClose()
              }}
              type={folderType.data}
            />
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  )
}
export default FoldersFeature
