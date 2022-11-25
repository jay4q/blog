import { FunctionComponent } from 'react'
import { Modal, ModalProps } from './modal'

export type WXDialogProps = ModalProps & {
  qrcodeUrl?: string
  message?: string
}

/**
 * 微信名片/小程序弹窗
 */
export const WXDialog: FunctionComponent<WXDialogProps> = ({ qrcodeUrl, message = '👆微信扫一扫或长按识别', ...props }) => {
  return (
    <Modal {...props}>
      <div className='w-64 rounded-lg bg-gray-100 pb-12 shadow-md dark:bg-gray-900'>
        {qrcodeUrl && <img alt='qrcode' className='h-64 w-full' src={qrcodeUrl} />}
        <h1 className='w-full text-center font-bold text-gray-900 dark:text-gray-100'>{message}</h1>
      </div>
    </Modal>
  )
}
