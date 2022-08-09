import MetaHeader from '../components/MetaHeader'
import ItemListing from '../container/ItemListing.tsx/Index'

const Item = () => {
  return (
    <div>
      <MetaHeader title="Item" description="Listing items" />
      <ItemListing />
    </div>
  )
}

export default Item
