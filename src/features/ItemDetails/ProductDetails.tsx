import React, { FC } from 'react'
import { useProductDetails } from './itemDetailsHook'

type Props = {
  slug: string
}
const ProductDetailsForm: FC<Props> = ({ slug }) => {
  console.log('slug is', slug)
  const {} = useProductDetails(slug)

  return <div>ProductDetailsForm</div>
}

export default ProductDetailsForm
