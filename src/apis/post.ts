import fs from 'fs'
import { join } from 'path'

const rootDir = join(process.cwd(), 'public/__post')

/**
 * @description 获取一篇文章
 * @param path 例如 about.md
 */
export const getPost = (path: string) => {
  try {
    const fullPath = join(rootDir, path)
    const source = fs.readFileSync(fullPath, 'utf8')
    return source
  } catch(err: any) {
    return ''
  }
}