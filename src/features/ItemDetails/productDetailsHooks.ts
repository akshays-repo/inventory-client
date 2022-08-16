import { useMemo } from 'react'
import { useGetProductDetailsQuery } from './productDetailApi'

export const useProductDetails = (slug: string) => {
  const {
    data: productDetails,
    refetch,
    isLoading: productDetailsIsloading,
    fulfilledTimeStamp
  } = useGetProductDetailsQuery(slug)

  return useMemo(() => {
    return {
      productDetails,
      refetch,
      productDetailsIsloading,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [productDetails, refetch, productDetailsIsloading, fulfilledTimeStamp])
}
