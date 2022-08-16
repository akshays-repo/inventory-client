import React, { FC } from 'react'
import { useConsumableStocks } from './itemDetailsHook'

type Props = {
  slug: string
}
const ConsumableDetails: FC<Props> = ({ slug }) => {
  const {} = useConsumableStocks(slug)

  return <div>ConsumableDetails</div>
}

export default ConsumableDetails
