import { Image, fixOpacityIgnoreHiddenStyle } from 'blitz-libs'
import { FunctionComponent } from 'react'
import { ChatAlt2Icon } from '@heroicons/react/outline'

type Props = {
  data: { [key in string]: string }
}

const ContactMe: FunctionComponent = () => {
  return (
    <button className=' px-3 py-1.5 flex item-center bg-pink-100 rounded-md dark:bg-pink-900 dark:bg-opacity-75'>
      <ChatAlt2Icon className='w-5 h-5 text-pink-600 dark:text-pink-200' />
      <span className='ml-1.5 text-pink-600 text-sm dark:text-pink-200'>Contact Me</span>
    </button>
  )
}

export const AuthorCard: FunctionComponent<Props> = ({ data }) => {
  return (
    <figure className='flex items-center mt-6 mb-8 w-full'>
      <Image src={data.avatar} className='mr-4 flex-shrink-0 w-[80px] h-[80px] rounded-full overflow-hidden ring-2 ring-gray-900 dark:ring-gray-200' style={fixOpacityIgnoreHiddenStyle} />
      <div>
        <h1 className='font-bold text-2xl mb-2 text-gray-900 dark:text-gray-100'>{data.author}</h1>
        <ContactMe />
        {/* <p className='whitespace-pre text-base text-gray-500 dark:text-gray-300'>{data.desc}</p> */}
      </div>
    </figure>
  )
}