import { loadImage, processImage } from '@/utils/image'
import { createRef, InputHTMLAttributes, PureComponent } from 'react'

type Props = {
  /**
   * @description 返回图片哈希和原图大小
   */
  onChange: (params: string) => void
}

/**
 * @description 图片处理工具
 */
export class ImageProcesser extends PureComponent<Props> {
  readonly state = { loading: false }
  private inputRef = createRef<HTMLInputElement>()

  onSelect: InputHTMLAttributes<HTMLInputElement>['onChange'] = async e => {
    if (e.target.files?.length !== 1) {
      return
    }

    try {
      const file = e.target.files[0]
      const tmpImage = await loadImage(file)
      const params = await processImage(tmpImage)

      if (typeof params === 'string') {
        this.props.onChange(params)
      }
    } catch (e) {
      console.error('图片处理失败', e)
    }
  }

  onSelectTrigger = () => {
    if (!this.state.loading) {
      const input = this.inputRef.current
      if (input) {
        // 清空选中的内容，这样可以重复上传
        input.value = ''
        input.click()
      }
    }
  }

  render() {
    return (
      <>
        <button type='button' className='w-44 h-10 bg-gray-900 text-gray-100 dark:text-gray-900 dark:bg-gray-100' onClick={this.onSelectTrigger}>
          处理图片
        </button>
        <input ref={this.inputRef} type='file' accept='image/*' className='!hidden' onChange={this.onSelect} />
      </>
    )
  }
}