import { ImageProcesser } from '@/components/image-processor'
import { FunctionComponent, useState } from 'react'

/**
 * @description 开发用的页面
 */
const Page: FunctionComponent = () => {
  const [params, setParams] = useState('')

  return (
    <>
      <ImageProcesser onChange={setParams} />
      {
        params && (
          <>
            <p className='my-4 text-gray-900 dark:text-gray-100'>{params}</p>
          </>
        )
      }
    </>
  )
}

export default Page