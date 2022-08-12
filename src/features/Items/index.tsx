import { Grid } from '@mui/material'
import ItemCard from './ItemCard'

const ItemFeature = () => {
  return (
    <div>
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
    </div>
  )
}
export default ItemFeature
