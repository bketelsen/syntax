import Head from 'next/head'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import { LinkGrid } from '@/components/LinkGrid';
import SectionContainer from '@/components/SectionContainer';
import { Hero } from '@/components/Hero';
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image';


export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Brian Ketelsen</title>
        <meta name="description" content="meta description" />
      </Head>
      <Hero
        title={siteMetadata.heroTitle}
        text={siteMetadata.heroText}  >
        <Image src="/static/images/header/skull.png" width={425} height={515} alt="" className= "w-full rounded-lg" />
      </Hero>

      <SectionContainer>
        <LinkGrid>
          <LinkGrid.Link
            title="Articles" icon="lightbulb" href="/blog" description="It was just too long for a tweet." />
          <LinkGrid.Link
            title="Elsewhere" icon="installation" href="/elsewhere" description="Presentations, talks, and appearances elsewhere."
          />
          <LinkGrid.Link
            title="Bytes" icon="theming" href="/bytes" description="Quick byte-sized links to interesting things."
          />
          <LinkGrid.Link
            title="Publications" icon="plugins" href="/publications" description="Books and other publications."
          />
        </LinkGrid>
      </SectionContainer>

    </>
  )
}
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
