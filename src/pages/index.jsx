import Head from 'next/head'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import { LinkGrid } from '@/components/LinkGrid';
import SectionContainer from '@/components/SectionContainer';
import { Hero } from '@/components/Hero';
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image';
import brian from '@/images/brian.jpg'
import { BlogNewsletterForm } from '@/components/NewsletterForm';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Brian Ketelsen</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <Hero
        title={siteMetadata.heroTitle}
        text={siteMetadata.heroText}  >
        <Image src={brian} width={800} height={534} alt="" className= "w-full rounded-lg" />
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
      <SectionContainer>
      <BlogNewsletterForm />
      </SectionContainer>

    </>
  )
}
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
