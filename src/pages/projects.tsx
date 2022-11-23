import { companyData, githubData, ProjectModel } from '@/apis/project'
import { FunctionComponent } from 'react'
import { CursorClickIcon } from '@heroicons/react/outline'
import { useModal } from '@/utils/hooks'
import dynamic from 'next/dynamic'
import { WXDialogProps } from '@/components/wx-dialog'

const WXDialog = dynamic<WXDialogProps>(
  // @ts-ignore
  () => import('../components/wx-dialog').then((mod) => mod.WXDialog),
  { ssr: false }
)

/**
 * @description 项目展示页
 */
const Page: FunctionComponent = () => {
  const { openModal, visible, modalData, closeModal } = useModal<string>()

  return (
    <>
      <h1 className='mt-8 mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>🎨 开源项目</h1>
      <ul className='flex w-full flex-wrap gap-4 md:gap-6'>
        {githubData.map((data, index) => (
          <GithubItem key={data.url} data={data} index={index} />
        ))}
      </ul>
      <h1 className='mt-8 mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>👨‍💻 工作案例</h1>
      <ul className='flex w-full flex-wrap gap-4 md:gap-6'>
        {companyData.map((data, index) => (
          <WorkItem key={data.url || data.qrcode} data={data} index={index} onCardClick={openModal} />
        ))}
      </ul>
      <WXDialog closeOnClickOverlay visible={visible} qrcodeUrl={modalData} onClose={closeModal} />
    </>
  )
}

export default Page

const GithubItem: FunctionComponent<{ data: ProjectModel; index: number }> = ({ data, index }) => {
  return (
    <li
      key={data.url}
      className='w-full origin-center rounded-xl bg-gradient-to-b p-1 transition-all odd:from-green-400 odd:to-blue-400 even:from-blue-400 even:to-green-400 hover:scale-[1.025] md:w-[calc(100%/3-1rem)] md:bg-gradient-to-r'
    >
      <a
        href={data.url}
        className='flex h-[160px] w-full flex-col justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-900 md:h-[200px]'
      >
        <h1 className='break-all text-justify text-lg font-medium text-gray-900 line-clamp-3 dark:text-gray-100 md:line-clamp-4'>
          {data.title}
        </h1>
        <div className='flex items-center'>
          <CursorClickIcon className='mr-1 h-5 w-5 text-gray-900 dark:text-gray-100' />
          <span className='text-base capitalize text-gray-900 dark:text-gray-100'>see more</span>
        </div>
      </a>
    </li>
  )
}

const WorkItem: FunctionComponent<{ data: ProjectModel; index: number; onCardClick: (qrcode: string) => void }> = ({
  data,
  onCardClick,
}) => {
  const onClick = () => {
    if (data.qrcode) {
      onCardClick(data.qrcode)
    } else if (data.url) {
      window.open(data.url)
    }
  }

  return (
    <li
      key={data.url}
      onClick={onClick}
      className='w-full origin-center cursor-pointer rounded-xl bg-gradient-to-b p-1 transition-all odd:from-blue-400 odd:to-orange-400 even:from-orange-400 even:to-blue-400 hover:scale-[1.025] md:w-[calc(100%/3-1rem)] md:bg-gradient-to-r'
    >
      <div className='flex h-[160px] w-full flex-col justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-900 md:h-[200px]'>
        <h1 className='break-all text-justify text-lg font-medium text-gray-900 line-clamp-3 dark:text-gray-100 md:line-clamp-4'>
          {data.title}
        </h1>
        <div className='flex items-center'>
          <CursorClickIcon className='mr-1 h-5 w-5 text-gray-900 dark:text-gray-100' />
          <span className='text-base capitalize text-gray-900 dark:text-gray-100'>see more</span>
        </div>
      </div>
    </li>
  )
}
