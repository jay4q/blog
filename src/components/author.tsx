import { Image, fixOpacityIgnoreHiddenStyle } from 'blitz-libs'
import { FunctionComponent } from 'react'

type Props = {
  data: { [key in string]: string }
}

export const AuthorCard: FunctionComponent<Props> = ({ data }) => {
  return (
    <figure className='flex items-center mt-6 mb-8 w-full'>
      <Image src={data.avatar} className='mr-4 flex-shrink-0 w-[80px] h-[80px] rounded-full overflow-hidden ring-2 ring-gray-900 dark:ring-gray-200' style={fixOpacityIgnoreHiddenStyle} />
      <div className='flex flex-col flex-grow'>
        <h1 className='font-bold text-3xl mb-2 text-gray-900 dark:text-gray-100'>{data.author}</h1>
        <p className='whitespace-pre text-base text-gray-500 dark:text-gray-300'>{data.desc}</p>
      </div>
    </figure>
  )
}