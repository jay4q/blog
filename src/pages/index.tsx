import { FunctionComponent } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'
import { getPost } from '@/apis/post'
import { AuthorCard } from '@/components/author'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: { [key in string]: string }
}

/**
 * @description 首页
 */
const Page: FunctionComponent<Props> = ({ source, frontMatter }) => {
  return (
    <>
      <AuthorCard data={frontMatter} />
      <article className='prose prose-pink max-w-none prose-p:text-justify prose-base dark:prose-invert'>
        <MDXRemote {...source} />
      </article>
    </>
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