import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

export type ModalProps = {
  visible: boolean
  closeOnClickOverlay?: boolean
  onClose?: () => void
  className?: string
}

export class Modal extends PureComponent<ModalProps> {
  onOverlayClose = () => {
    if (this.props.closeOnClickOverlay && this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    const { visible, className, children } = this.props

    return createPortal(
      <div className={classNames('fixed z-50 inset-0 w-full h-full transition-all duration-200', visible ? 'visible' : 'invisible')}>
        <div onClick={this.onOverlayClose} className={classNames('absolute w-full h-full inset-0 bg-gray-100 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-20 transition-all duration-200', visible ? 'backdrop-blur-md opacity-100' : 'backdrop-blur-0 opacity-0')}></div>
        <div className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200', className, visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
          {children}
        </div>
      </div>,
      document.getElementById('__modal')!
    )
  }
}