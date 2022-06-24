import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'

export const useGlobalLoading = () => {
  const router = useRouter()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const handleStart = () => NProgress.start()
    const handleComplete = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
}

export const useConsoleLogo = () => {
  useEffect(() => {
    console.log(
      window.atob(
        'SGV5LCBJJ20KIF9fX19fICBfX19fX18gICBfXyAgICBfXyAgX18gX18gICAgX19fX18gICAgICAKL1xfX18gXC9cICBfICBcIC9cIFwgIC9cIFwvXCBcXCBcICAvXCAgX19gXCAgICAKXC9fXy9cIFwgXCBcTFwgXFwgYFxgXFwvJy9cIFwgXFwgXCBcIFwgXC9cIFwgICAKICAgX1wgXCBcIFwgIF9fIFxgXCBgXCAvJyAgXCBcIFxcIFxfXCBcIFwgXCBcICAKICAvXCBcX1wgXCBcIFwvXCBcIGBcIFwgXCAgIFwgXF9fICxfX1wgXCBcXCdcXCAKICBcIFxfX19fL1wgXF9cIFxfXCAgXCBcX1wgICBcL18vXF9cXy9cIFxfX19cX1wKICAgXC9fX18vICBcL18vXC9fLyAgIFwvXy8gICAgICBcL18vICAgXC9fXy8vXy8='
      )
    )
  }, [])
}
