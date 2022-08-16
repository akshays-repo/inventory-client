import { useRouter } from 'next/router'
import ItemDetails from 'src/features/ItemDetails'

const Items = () => {
  const router = useRouter()
  const { id } = router.query

  return <ItemDetails slug={id as string} />
}
export default Items
