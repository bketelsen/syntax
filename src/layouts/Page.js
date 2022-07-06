import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '../data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { Prose } from '@/components/Prose'
export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {  title } = frontMatter

  return (
    <SectionContainer>
      <PageSEO url={`${siteMetadata.siteUrl}${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">

              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <Prose>{children}</Prose>
            </div>

          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
