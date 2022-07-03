export default function PageTitle({ children }) {
  return (
    <h1 className="inline text-5xl tracking-tight text-transparent bg-gradient-to-br from-indigo-800 via-sky-500 to-indigo-800 dark:from-indigo-200 dark:via-sky-500 dark:to-indigo-200 bg-clip-text font-display">
      {children}
    </h1>
  )
}
