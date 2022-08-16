import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/api'

export interface Post {
  id: string
  name: string
}
export interface ProductsSearch {
  id: number
  name: string
  slug: string
  manufature: string
  thumNailImage: string
  price: number
}

export const productSearchApi = createApi({
  baseQuery,
  tagTypes: ['Productsearch'],
  endpoints: build => ({
    searchProduct: build.query<ProductsSearch[], string | undefined>({
      query: search => `/products/search/${search}`
    })
  })
})

export const { useSearchProductQuery } = productSearchApi
