import AppearanceListLayout from '@/layouts/AppearanceListLayout'
import { POSTS_PER_PAGE } from '../../elsewhere'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('elsewhere')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('elsewhere')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <AppearanceListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Appearances and Events"
      />
    </>
  )
}
