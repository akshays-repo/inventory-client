import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'
import MetaHeader from '../components/MetaHeader'
import HomePage from '../container/Homepage.tsx/indext'

const Home: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      <MetaHeader />
      
      <HomePage />
    </div>
  )
}

export default Home;
