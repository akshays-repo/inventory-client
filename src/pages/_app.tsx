import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import AppLayout from '../components/layout'
import MetaHeader from '../components/MetaHeader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AppAuthentication } from '../lib/authentication'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)
  const [isUserLogined, setisUserLogined] = useState(false)
  useEffect(() => {
    // run auth check on initial load
    const appAuth = AppAuthentication.getInstance()

    setisUserLogined(appAuth.isUserLogined())

    authCheck(router.asPath)
    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [])

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/loginA']
    const path = url.split('?')[0]
    if (!isUserLogined && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: '/loginA',
        query: { returnUrl: router.asPath },
      })
    } else {
      setAuthorized(true)
    }
  }

  return (
    <Provider store={store}>
      <>
        {console.log(isUserLogined)}
        {isUserLogined ? (
          <AppLayout>
            <MetaHeader />
            <Component {...pageProps} />
          </AppLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    </Provider>
  )
}

export default MyApp
