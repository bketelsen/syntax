export function Bookmark({  href, title, description, image }) {
  return (
    <a href={href} className="not-prose">

    <div className="flex flex-col items-center bg-white border rounded-lg shadow-2xl cursor-pointer not-prose md:flex-row hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
      <img class="not-prose object-contain w-full h-auto rounded-t-lg md:w-64 md:rounded-lg" src={image} alt="" />
        <div class="not-prose flex flex-col justify-between p-4 leading-normal">
        <h5 class="not-prose mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-300">{title}</h5>
          <p class="not-prose mb-3 font-normal text-slate-700 dark:text-slate-400">{description}</p>
        </div>

      </div>
      </a>
  )
}
