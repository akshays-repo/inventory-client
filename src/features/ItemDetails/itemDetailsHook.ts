import { useMemo } from 'react'
import { useGetAllocatedStocksQuery, useGetConsumableStocksQuery, useGetProductDetailsQuery } from './productDetailApi'

export const useProductDetails = (slug: string) => {
  const {
    data: productDetails,
    refetch,
    isLoading: productDetailsIsloading,
    fulfilledTimeStamp,
    isSuccess: productDetailsIsSuccess
  } = useGetProductDetailsQuery(slug)

  return useMemo(() => {
    return {
      productDetails,
      refetch,
      productDetailsIsSuccess,
      productDetailsIsloading,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [productDetails, refetch, productDetailsIsloading, fulfilledTimeStamp, productDetailsIsSuccess])
}

export const useConsumableStocks = (slug: string) => {
  const {
    data: consumableDetails,
    refetch: consumableRefetch,
    isLoading: consumableIsloading,
    fulfilledTimeStamp
  } = useGetConsumableStocksQuery(slug)

  return useMemo(() => {
    return {
      consumableDetails,
      consumableRefetch,
      consumableIsloading,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [consumableDetails, consumableRefetch, consumableIsloading, fulfilledTimeStamp])
}

export const useAllocatedStocks = (slug: string) => {
  const {
    data: allocatedDetails,
    refetch: allocatedDetailsRefetch,
    isLoading: allocatedIsLoading,
    fulfilledTimeStamp
  } = useGetAllocatedStocksQuery(slug)

  return useMemo(() => {
    return {
      allocatedDetails,
      allocatedDetailsRefetch,
      allocatedIsLoading,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [allocatedDetails, allocatedDetailsRefetch, allocatedIsLoading, fulfilledTimeStamp])
}
