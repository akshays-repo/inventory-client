export interface ProductDetails {
  id: number
  name: string
  slug: string
  manufature: string
  thumNailImage: string
  price: number
  category: Category
}

interface Category {
  id: number
  name: string
  slug: string
  thumbNailImage: string
  type: Type
}

interface Type {
  id: number
  name: string
}

export interface AllocatedDetails {
  id: number
  quntity: number
  allocated: number
  product: ProductDetails
}

export interface ConsumableDetails {
  id: number
  quntity: number
  product: ProductDetails
}
