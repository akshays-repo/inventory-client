import { Grid } from '@mui/material'
import FolderCard from './FolderCard'

const FoldersFeature = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>{' '}
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>{' '}
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>{' '}
        <Grid item xs={12} sm={6} md={3}>
          <FolderCard title={'Laptop'} image='https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' />
        </Grid>
      </Grid>
    </div>
  )
}
export default FoldersFeature
