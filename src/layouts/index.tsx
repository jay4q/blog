import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FunctionComponent } from 'react'

export const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    <main className='flex w-full flex-col p-4 pb-8'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
