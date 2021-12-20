import 'nprogress/nprogress.css'
import '@/styles/global.css'
import 'intersection-observer'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useConsoleLogo, useGlobalLoading } from '@/utils/hooks'

export default function App({ Component, pageProps }: AppProps) {
  useGlobalLoading()
  useConsoleLogo()

  return (
    <>
      <Head>
        <meta name="charset" content="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <title>Jay4Q Zhang</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}