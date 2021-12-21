import { companyData, githubData, ProjectModel } from '@/apis/project'
import { FunctionComponent } from 'react'
import { CursorClickIcon } from '@heroicons/react/outline'

const GithubItem: FunctionComponent<{ data: ProjectModel, index: number }> = ({ data, index }) => {
  return (
    <li key={data.url} className='w-full md:w-[calc(100%/3-1rem)] p-1 rounded-xl transition-all origin-center hover:scale-[1.025] bg-gradient-to-b md:bg-gradient-to-r odd:from-green-400 odd:to-blue-400 even:from-blue-400 even:to-green-400'>
      <a href={data.url} className='flex flex-col justify-between w-full h-[160px] md:h-[200px] p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
        <h1 className='font-medium text-lg text-gray-900 dark:text-gray-100 line-clamp-3 md:line-clamp-4 break-all'>
          {data.title}
        </h1>
        <div className='flex items-center'>
          <CursorClickIcon className='w-5 h-5 text-gray-900 dark:text-gray-100 mr-1' />
          <span className='text-base text-gray-900 dark:text-gray-100 capitalize'>see more</span>
        </div>
      </a>
    </li>
  )
}

const WorkItem: FunctionComponent<{ data: ProjectModel, index: number }> = ({ data, index }) => {
  return (
    <li key={data.url} className='w-full md:w-[calc(100%/3-1rem)] p-1 rounded-xl transition-all origin-center hover:scale-[1.025] bg-gradient-to-b md:bg-gradient-to-r odd:from-blue-400 odd:to-orange-400 even:from-orange-400 even:to-blue-400'>
      <a href={data.url} className='flex flex-col justify-between w-full h-[160px] md:h-[200px] p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
        <h1 className='font-medium text-lg text-gray-900 dark:text-gray-100 line-clamp-3 md:line-clamp-4 break-all'>
          {data.title}
        </h1>
        <div className='flex items-center'>
          <CursorClickIcon className='w-5 h-5 text-gray-900 dark:text-gray-100 mr-1' />
          <span className='text-base text-gray-900 dark:text-gray-100 capitalize'>see more</span>
        </div>
      </a>
    </li>
  )
}

/**
 * @description 项目展示页
 */
const Page: FunctionComponent = () => {
  return (
    <>
      <h1 className='mt-8 mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>🎨 开源项目</h1>
      <ul className='w-full flex flex-wrap gap-4 md:gap-6'>
        {
          githubData.map((data, index) => <GithubItem key={data.url} data={data} index={index} />)
        }
      </ul>
      <h1 className='mt-8 mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>👨‍💻 工作案例</h1>
      <ul className='w-full flex flex-wrap gap-4 md:gap-6'>
        {
          companyData.map((data, index) => <WorkItem key={data.url} data={data} index={index} />)
        }
      </ul>
    </>
  )
}

export default Page