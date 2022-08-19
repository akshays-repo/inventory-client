import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/api'
import { AllocatedDetails, ConsumableDetails, ProductDetails } from './productDetails.type'

export const productDetailsApi = createApi({
  reducerPath: 'productDetail',
  baseQuery,
  tagTypes: ['ProductDetail', 'allocated', 'consumable'],

  endpoints: build => ({
    getProductDetails: build.query<ProductDetails, string>({
      query: slug => `/products/slug/${slug}`,
      providesTags: ['ProductDetail']
    }),

    getAllocatedStocks: build.query<AllocatedDetails, string>({
      query: slug => `stocks/allocated/${slug}`

      // providesTags: ['allocated']
    }),

    getConsumableStocks: build.query<ConsumableDetails, string>({
      query: slug => `stocks/consumable/${slug}`

      // providesTags: ['consumable']
    }),

    updateProductDetail: build.mutation<ProductDetails, Partial<ProductDetails>>({
      query(data) {
        const { id, ...body } = data

        return {
          url: `products/${id}`,
          method: 'PATCH',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'ProductDetail', id }]
    }),

    updateConsumableDetail: build.mutation<ConsumableDetails, Partial<ConsumableDetails>>({
      query(data) {
        const { id, ...body } = data

        return {
          url: `stocks/consumable/${id}`,
          method: 'PATCH',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'consumable', id }]
    }),

    updateAllocatedDetail: build.mutation<AllocatedDetails, Partial<AllocatedDetails>>({
      query(data) {
        const { id, ...body } = data

        return {
          url: `stocks/allocated/${id}`,
          method: 'PATCH',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'allocated', id }]
    })
  })
})

export const {
  useGetAllocatedStocksQuery,
  useUpdateProductDetailMutation,
  useGetConsumableStocksQuery,
  useGetProductDetailsQuery,
  useUpdateAllocatedDetailMutation,
  useUpdateConsumableDetailMutation
} = productDetailsApi
