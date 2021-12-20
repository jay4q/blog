import { FunctionComponent } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'
import { getPost } from '@/apis/post'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: { [key in string]: string }
}

const Page: FunctionComponent<Props> = ({ source, frontMatter }) => {
  console.log(frontMatter)

  return (
    <article className='p-4 prose prose-orange max-w-none prose-base dark:prose-invert lg:prose-xl'>
      <MDXRemote {...source} />
    </article>
  )
}

export async function getStaticProps() {
  const source = getPost('about.md')

  if (!source) {
    return {
      notFound: true
    }
  }

  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { props: { source: mdxSource, frontMatter: data } }
}

export default Page