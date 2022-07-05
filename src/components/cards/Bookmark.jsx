export function Bookmark({  href, title,  image , children}) {
  return (
    <a href={href} className="not-prose">

    <div className="flex flex-col items-center bg-white border rounded-lg shadow-2xl cursor-pointer not-prose md:flex-row hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
      <img className="object-contain w-full h-auto rounded-t-lg not-prose md:w-64 md:rounded-lg" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal not-prose">
        <h5 className="mb-2 text-2xl font-bold tracking-tight not-prose text-slate-900 dark:text-slate-300">{title}</h5>
          <div className="mb-3 font-normal ">{children}</div>
        </div>

      </div>
      </a>
  )
}
