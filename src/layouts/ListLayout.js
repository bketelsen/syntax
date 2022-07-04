import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { Hero } from '@/components/Hero';
import clsx from 'clsx';
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, subtitle, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <Hero
        title={title}
        text={subtitle}
      >
        <div className="pt-4 pl-4">
          <img src="/static/images/header/zeppelin-g457073aee_1280.png" className="w-full rounded-lg" />
        </div>
      </Hero>
      <div className="max-w-xl pt-6 pb-8 mx-auto space-y-2 md:space-y-5">

        <div className="relative max-w-lg">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-md not-prose border-slate-300 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-slate-800 dark:text-slate-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl not-prose">
        <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
          <div className="space-y-16">
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <article key={slug} className="relative group">
                  <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
                  <svg
                    viewBox="0 0 9 9"
                    className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                  >
                    <circle
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      stroke="currentColor"
                      className="fill-white dark:fill-slate-900"
                      strokeWidth={2}
                    />
                  </svg>
                  <div className="relative">
                    <h3 className="pt-8 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200 lg:pt-0">
                      {title}
                    </h3>
                    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:text-slate-400 line-clamp-2">
                      {summary}
                    </div>
                    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                      <dt className="sr-only">Date</dt>
                      <dd className={clsx('whitespace-nowrap text-sm leading-6 dark:text-slate-400')}>
                        <time dateTime={date}>{formatDate(date, '{MMMM} {DD}, {YYYY}')}</time>
                      </dd>
                    </dl>
                  </div>
                  <Link href={`/blog/${slug}`} className="flex items-center text-sm font-medium text-sky-500">
                      <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative">
                        Read more<span className="sr-only">, {title}</span>
                      </span>
                      <svg
                        className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0L3 3L0 6"></path>
                      </svg>

                  </Link>
                </article>
              )
            })}
          </div>
        </div>
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </main>

    </>
  )
}
