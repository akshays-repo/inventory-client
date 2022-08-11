import MetaHeader from '../components/MetaHeader'
import ItemListing from '../container/ItemListing.tsx/Index'
import withAuth from '../hoc/withAuth'

const Item = () => {
  return (
    <div>
      <MetaHeader title="Item" description="Listing items" />
      <ItemListing />
    </div>
  )
}

export default withAuth(Item)
