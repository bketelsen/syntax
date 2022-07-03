export function NewsletterForm({ action }) {
  return (
    <form action={action} method="post" className="flex flex-wrap -mx-2">
      <div className="px-2 grow-[9999] basis-64 mt-3">
        <div className="relative group">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="absolute inset-y-0 w-6 h-full pointer-events-none left-3 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
          >
            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
            <path d="m6 7 6 5 6-5" />
          </svg>
          <input
            name="email_address"
            type="email"
            required
            aria-label="Email address"
            className="block w-full py-2 pl-12 pr-3 leading-5 bg-white border border-transparent rounded-md shadow appearance-none ring-1 ring-slate-900/5 sm:text-sm placeholder:text-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
            placeholder="Subscribe via email"
          />
        </div>
      </div>
      <div className="flex px-2 mt-3 grow">
        <button
          type="submit"
          className="flex-auto px-3 py-2 text-sm font-semibold text-white border-transparent rounded-md shadow bg-sky-500 border-y hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}
