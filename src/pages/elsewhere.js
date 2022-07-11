import AppearanceListLayout from '@/layouts/AppearanceListLayout'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('elsewhere')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Elsewhere({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Appearances and Events - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <AppearanceListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Appearances and Events"
      />
    </>
  )
}
