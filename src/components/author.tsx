import { FunctionComponent, useState } from 'react'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'

type Props = {
  data: { [key in string]: string }
}

const WXDialog = dynamic(
  // @ts-ignore
  () => import('./wx-dialog').then((mod) => mod.WXDialog),
  { ssr: false }
)

const ContactMe: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <button
        className=' item-center flex rounded-md bg-pink-100 px-3 py-1.5 dark:bg-pink-900 dark:bg-opacity-75'
        onClick={() => setVisible(true)}
      >
        <ChatAlt2Icon className='h-5 w-5 text-pink-600 dark:text-pink-200' />
        <span className='ml-1.5 text-sm text-pink-600 dark:text-pink-200'>Contact Me</span>
      </button>
      <WXDialog
        closeOnClickOverlay
        visible={visible}
        onClose={() => setVisible(false)}
        qrcodeUrl='https://7370-spa-0g2njvtnd97eff62-1303873307.tcb.qcloud.la/jay4q/contact.png'
      />
    </>
  )
}

export const AuthorCard: FunctionComponent<Props> = ({ data }) => {
  return (
    <figure className='mt-6 mb-8 flex w-full items-center'>
      <img
        src='/avatar.png'
        className='mr-4 h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-full bg-slate-400 ring-2 ring-gray-900 dark:ring-gray-200'
      />
      <div>
        <h1 className='mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100'>{data.author}</h1>
        <ContactMe />
        {/* <p className='whitespace-pre text-base text-gray-500 dark:text-gray-300'>{data.desc}</p> */}
      </div>
    </figure>
  )
}
