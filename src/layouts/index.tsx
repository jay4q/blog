import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import classNames from 'classnames'
import { FunctionComponent } from 'react'

type Props = {
  className?: string
}

export const BaseLayout: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <main className={classNames('flex w-full flex-col p-4 pb-8', className)}>
      <Header />
      {children}
      <Footer />
      <div id='__modal'></div>
    </main>
  )
}
