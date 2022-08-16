import React, { FC } from 'react'
import { useAllocatedStocks } from './itemDetailsHook'

type Props = {
  slug: string
}
const AllocatedStocks: FC<Props> = ({ slug }) => {
  const {} = useAllocatedStocks(slug)

  return <div>AllocatedStocks</div>
}

export default AllocatedStocks
