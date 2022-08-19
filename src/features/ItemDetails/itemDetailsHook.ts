import { useMemo } from 'react'
import {
  useGetAllocatedStocksQuery,
  useGetConsumableStocksQuery,
  useGetProductDetailsQuery,
  useUpdateAllocatedDetailMutation,
  useUpdateConsumableDetailMutation,
  useUpdateProductDetailMutation
} from './productDetailApi'

export const useProductDetails = (slug: string) => {
  const {
    data: productDetails,
    refetch,
    isLoading: productDetailsIsloading,
    fulfilledTimeStamp,
    isSuccess: productDetailsIsSuccess
  } = useGetProductDetailsQuery(slug)

  const [updateProductDetail] = useUpdateProductDetailMutation()

  return useMemo(() => {
    return {
      productDetails,
      refetch,
      productDetailsIsSuccess,
      productDetailsIsloading,
      updateProductDetail,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [
    productDetails,
    refetch,
    updateProductDetail,
    productDetailsIsloading,
    fulfilledTimeStamp,
    productDetailsIsSuccess
  ])
}

export const useConsumableStocks = (slug: string) => {
  const {
    data: consumableDetails,
    refetch: consumableRefetch,
    isLoading: consumableIsloading,
    fulfilledTimeStamp
  } = useGetConsumableStocksQuery(slug)

  const [updateConsumableDetail] = useUpdateConsumableDetailMutation()

  return useMemo(() => {
    return {
      consumableDetails,
      consumableRefetch,
      consumableIsloading,
      lastUpdatedAt: fulfilledTimeStamp,
      updateConsumableDetail
    }
  }, [consumableDetails, updateConsumableDetail, consumableRefetch, consumableIsloading, fulfilledTimeStamp])
}

export const useAllocatedStocks = (slug: string) => {
  const {
    data: allocatedDetails,
    refetch: allocatedDetailsRefetch,
    isLoading: allocatedIsLoading,
    fulfilledTimeStamp,
    isError: allocatedIsError,
    isSuccess: allocatedIsSuccess
  } = useGetAllocatedStocksQuery(slug)

  const [updateAllocatedDetail] = useUpdateAllocatedDetailMutation()

  console.log({ allocatedDetails })

  return useMemo(() => {
    return {
      allocatedDetails,
      allocatedDetailsRefetch,
      allocatedIsLoading,
      allocatedIsSuccess,
      allocatedIsError,
      lastUpdatedAt: fulfilledTimeStamp,
      updateAllocatedDetail
    }
  }, [
    allocatedDetails,
    allocatedDetailsRefetch,
    allocatedIsLoading,
    allocatedIsSuccess,
    allocatedIsError,
    fulfilledTimeStamp,
    updateAllocatedDetail
  ])
}
