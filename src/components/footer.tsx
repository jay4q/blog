import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  return (
    <footer className='mt-8 flex w-full flex-shrink-0 flex-col items-center border-t border-gray-200 pt-4 dark:border-gray-800'>
      <p className='mb-2 w-full text-center text-sm text-gray-400 dark:text-gray-500'>
        Powered by{' '}
        <a href='https://nextjs.org/' target='_blank' className='text-gray-500 dark:text-gray-400'>
          Nextjs
        </a>{' '}
        & Deployed on{' '}
        <a href='https://vercel.com/' target='_blank' className='text-gray-500 dark:text-gray-400'>
          Vercel
        </a>
      </p>
      <p className='w-full text-center text-xs text-gray-400 dark:text-gray-500'>
        备案号：
        <a href='https://beian.miit.gov.cn/' target='_blank' className='text-gray-500 dark:text-gray-400'>
          苏ICP备2020056757号-2
        </a>
      </p>
    </footer>
  )
}
