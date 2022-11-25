import 'nprogress/nprogress.css'
import '@/styles/global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useConsoleLogo, useGlobalLoading } from '@/utils/hooks'
import { BaseLayout } from '@/layouts'
import localFont from '@next/font/local'

const zhFont = localFont({
  src: '../../public/fonts/SmileySans-Oblique.ttf.woff2',
  fallback: [
    '-apple-system',
    'system-ui',
    'Helvetica Neue',
    'Helvetica,Arial',
    'PingFang SC',
    'Hiragino Sans GB',
    'WenQuanYi Micro Hei',
    'Microsoft Yahei',
    'sans-serif',
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  useGlobalLoading()
  useConsoleLogo()

  return (
    <>
      <Head>
        <meta name='charset' content='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0'
        />
        <link rel='icon' href='/favicon.png' />
        <title>Jay4Q Zhang</title>
      </Head>
      <BaseLayout className={zhFont.className}>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}
