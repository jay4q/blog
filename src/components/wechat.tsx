import { FunctionComponent } from 'react'
import { Modal, ModalProps } from './modal'

/**
 * @description 微信名片弹窗
 */
export const WechatDialog: FunctionComponent<ModalProps> = (props) => {
  return (
    <Modal {...props}>
      <div className='w-64 rounded-lg bg-gray-100 pb-12 shadow-md ring-4 ring-pink-600 dark:bg-gray-900'>
        <img alt='qrcode' className='w-full' src='/contact.png' />
        <h1 className='w-full text-center font-bold text-gray-900 dark:text-gray-100'>👆微信扫一扫或长按识别</h1>
      </div>
    </Modal>
  )
}
