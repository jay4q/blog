import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FunctionComponent } from 'react'

export const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    <main className='flex flex-col w-full p-4 pb-8'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}