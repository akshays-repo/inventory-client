import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { AppAuthentication } from 'src/@core/utils/authentication'
import { NextComponentType } from 'next/dist/shared/lib/utils'

function withAuth(Component: NextComponentType) {
  Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  const Auth = (props: any) => {
    const { asPath } = useRouter()
    const [authState, setAuthState] = useState<'s' | 'l' | 'f'>('l')
    useEffect(() => {
      const isLoggedIn = new AppAuthentication().isUserLogined()
      if (isLoggedIn) {
        setAuthState('s')
      } else {
        setAuthState('f')
      }
    })

    if (authState === 's' && asPath === '/loginA') {
      return (
        <div>
          <h2>Something went wrong</h2>
          <button>Go back</button>
        </div>
      )
    }

    if (authState === 'f') {
      Router.push('/login')

      return ''
    }

    if (authState === 'l') {
      return <h1>Loading....</h1>
    }

    if (authState === 's') {
      return <Component {...props} />
    }

    return <h2>Something went wrong</h2>
  }

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}
export default withAuth
