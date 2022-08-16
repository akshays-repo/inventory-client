// ** Next Imports
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Home from 'mdi-material-ui/Home'
import FolderPlus from 'mdi-material-ui/FolderPlus'
import CartMinus from 'mdi-material-ui/CartMinus'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'
import { store } from 'src/store'
import { useEffect, useState } from 'react'
import { Card } from '@mui/material'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const BreadCrum = () => {
  return (
    <Card sx={{ my: '10px', padding: '10px' }}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' sx={{ display: 'flex', alignItems: 'center' }} color='inherit' href='/'>
          <Home />
          <div className='m-2'>Home </div>
        </Link>
        <Link
          underline='hover'
          sx={{ display: 'flex', alignItems: 'center' }}
          color='inherit'
          href='/material-ui/getting-started/installation/'
        >
          <FolderPlus />
          <div className='m-2'>Folder </div>
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color='text.primary'>
          <CartMinus />
          <div className='m-2'>Product </div>
        </Typography>
      </Breadcrumbs>
    </Card>
  )
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<
    {
      href: string
      label: string
    }[]
  >([])

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter(path => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')

      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1)
      }
    })

    setBreadcrumbs(breadcrumbs)
    console.log({ breadcrumbs })
  }, [router.asPath])

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <Provider store={store}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={settings}>
                  {getLayout(
                    <>
                      {/* <BreadCrum /> */}
                      <Component {...pageProps} />
                    </>
                  )}
                </ThemeComponent>
              )
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </Provider>
    </CacheProvider>
  )
}

export default App
