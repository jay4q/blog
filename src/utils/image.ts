import { getBlurhash } from 'blitz-libs'
import qs from 'query-string'

export const loadImage = async (src: string | File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (...args) => reject(args)
    img.src = typeof src === 'string' ? src : URL.createObjectURL(src)
  })

/**
 * @description 获取图片模糊哈希和尺寸
 * @param img 
 */
export const processImage = async (img: HTMLImageElement) => {
  const { hash } = await getBlurhash(img) || {}
  const { width, height } = img
  return qs.stringify({ hash, width, height }, { skipNull: true })
}