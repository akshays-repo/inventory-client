// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import { FC } from 'react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import AllocatedStocks from './AllocatedStocks'
import ConsumableDetails from './ConsumableDetails'
import { useProductDetails } from './itemDetailsHook'
import ProductDetailsForm from './ProductDetails'

type Props = {
  slug: string
}

const ItemDetails: FC<Props> = ({ slug }) => {
  const { productDetails, productDetailsIsloading, productDetailsIsSuccess } = useProductDetails(slug)
  const typeId = productDetails?.category.type.id

  if (productDetailsIsloading) {
    return <h2>Loading...</h2>
  }

  return (
    <Card className='p-3'>
      {productDetailsIsSuccess && productDetails && <ProductDetailsForm slug={slug} productDetails={productDetails} />}
      {productDetailsIsSuccess && typeId === 1 && <AllocatedStocks slug={slug} />}
      {productDetailsIsSuccess && typeId === 2 && <ConsumableDetails slug={slug} />}
    </Card>
  )
}

export default ItemDetails
