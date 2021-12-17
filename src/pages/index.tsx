import { FunctionComponent } from 'react'

const Page: FunctionComponent = () => {
  return (
    <main className='w-full py-4 px-2'>
      <p className='text-black font-medium leading-9 tracking-wide'>
        这是 jay4q 的个人博客<br />
        目前正在升级中...<br />
        暂时请前往 <a className='text-blue-500' href='https://github.com/jay4q' target='_blank'>Github </a> 首页查看
      </p>
    </main>
  )
}

export default Page