import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

const menus = [
  { title: 'About', path: '/' },
  { title: 'Projects', path: '/projects' }
]

const isInitialDark = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  // 同时修改页面状态
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return isDark
}

const DarkSwitch: FunctionComponent = () => {
  const [isDark, setDark] = useState(false)

  const toggleDark = () => {
    if (!isDark) {
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDark(false)
    }
  }

  // 只有在客户端时，才能判断用户机器是否是深色模式
  useEffect(() => {
    setDark(isInitialDark())
  }, [])

  return (
    <button className='flex items-center justify-center w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-600 transition-all hover:ring-2 ring-gray-300' onClick={toggleDark}>
      {
        isDark
          ? <MoonIcon className='w-5 h-5 text-gray-800 dark:text-gray-200' />
          : <SunIcon className='w-5 h-5 text-gray-800 dark:text-gray-200' />
      }
    </button>
  )
}

/**
 * @description 标题
 */
export const Header: FunctionComponent = () => {
  const { pathname } = useRouter()

  return (
    <header className='mt-2 w-full h-11 flex items-center justify-between'>
      <div className='flex items-center'>
        {
          menus.map(item => (
            <Link key={item.title} href={item.path}>
              <a className={classNames('mr-4 text-gray-900 dark:text-gray-100', item.path === pathname && 'font-bold')}>{item.title}</a>
            </Link>
          ))
        }
      </div>
      <DarkSwitch />
    </header>
  )
}