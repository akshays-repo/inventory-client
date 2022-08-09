import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import AppLayout from '../components/layout'
import MetaHeader from '../components/MetaHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
      <MetaHeader />
      <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}

export default MyApp
