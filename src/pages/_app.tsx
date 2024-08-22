// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//** Redux provider Import */
import {Provider} from 'react-redux'

import { store } from 'src/store'


// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import AdminLayout from 'src/layouts/AdminLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'
import { ReactNode } from 'react'

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

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <AdminLayout>{page}</AdminLayout>)
  const getLayoutUser = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  let rol = ' '

  if (typeof window !== 'undefined') {
    rol = JSON.parse(sessionStorage.getItem('rol'))
  }

  console.log(rol)


  return (
    <Provider store={store}>

      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName}`}</title>
          <meta
            name='description'
            content={`${themeConfig.templateName}`}
          />
          <meta name='keywords' content='Admin' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{rol==='admin'? getLayout(<Component {...pageProps} />): rol==='user'? getLayoutUser(<Component {...pageProps} />):getLayout(<Component {...pageProps} />)}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </Provider>
  )
}
export default App
