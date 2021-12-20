import { FunctionComponent } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export const Footer: FunctionComponent = () => {
  return (
    <footer className='w-full mt-8 pt-4 border-t-2 border-gray-200 dark:border-gray-800 flex-shrink-0'>
      <a href='https://github.com/jay4q' className='flex items-center' target='_blank'>
        <span className='text-sm text-gray-500 mr-1'>Github</span>
        <ExternalLinkIcon className='text-gray-500 w-4 h-4' />
      </a>
    </footer>
  )
}