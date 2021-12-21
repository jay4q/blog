import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  return (
    <footer className='w-full mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 flex-shrink-0'>
      <p className='w-full text-center text-sm text-gray-400 dark:text-gray-500'>
        Powered by <a href='https://nextjs.org/' target='_blank' className='text-gray-500 dark:text-gray-400'>Nextjs</a> & 
        Deployed on <a href='https://vercel.com/' target='_blank' className='text-gray-500 dark:text-gray-400'>Vercel</a>
      </p>
    </footer>
  )
}