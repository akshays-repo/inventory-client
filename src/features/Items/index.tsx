import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import FolderPlus from 'mdi-material-ui/FolderPlus'
import ItemCard from './ItemCard'

const ItemFeature = () => {
  return (
    <div>
      <Card>
        <CardHeader
          title='Products'
          action={
            <Button variant='contained' endIcon={<FolderPlus />}>
              New Product
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
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>{' '}
            <Grid item xs={12} sm={6} md={3}>
              <ItemCard />
            </Grid>
          </Grid>
        </CardContent>

        {/* <Dialog
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
        </Dialog> */}
      </Card>
    </div>
  )
}
export default ItemFeature
