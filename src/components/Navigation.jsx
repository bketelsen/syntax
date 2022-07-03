import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import headerNavLinks from '@/data/headerNavLinks'


export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-9">
        {headerNavLinks.map((link) => (

                <li key={link.href} className="relative">
                  <Link href={link.href}>
                    <a
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        {
                          'font-semibold text-sky-500 before:bg-sky-500':
                            link.href === router.pathname,
                          'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300':
                            link.href !== router.pathname,
                        }
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
      </ul>
    </nav>
  )
}
