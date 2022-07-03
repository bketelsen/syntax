

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Recent({posts}) {
  return (
    <div className="px-4 pt-4 pb-20 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-300 sm:text-4xl">Recent publications</h2>
          <p className="mt-3 text-xl text-slate-300 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="grid gap-16 pt-12 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href="/blog" className="inline-block">
                  <span
                    className={classNames(
                      'bg-sky-200',
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    Article
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href="/about">
                    <span className="sr-only">"Brian Ketelsen"</span>
                    <img className="w-10 h-10 rounded-full" src="" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="/about">Brian Ketelsen</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
