import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/api'
import { AllocatedDetails, ConsumableDetails, ProductDetails } from './productDetails.type'

export const productDetailsApi = createApi({
  reducerPath: 'productDetail',
  baseQuery,
  tagTypes: ['ProductDetail'],
  endpoints: build => ({
    getProductDetails: build.query<ProductDetails[], string>({
      query: slug => `/products/slug/${slug}`
    }),
    getAllocatedStocks: build.query<AllocatedDetails[], string>({
      query: slug => `allocated/${slug}`,
      providesTags: ['ProductDetail']
    }),

    getConsumableStocks: build.query<ConsumableDetails[], string>({
      query: slug => `consumable/${slug}`,
      providesTags: ['ProductDetail']
    })
  })
})

export const { useGetAllocatedStocksQuery, useGetConsumableStocksQuery, useGetProductDetailsQuery } = productDetailsApi
