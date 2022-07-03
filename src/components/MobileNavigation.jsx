import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'

import { Navigation } from '@/components/Navigation'
import siteMetadata from '@/data/siteMetadata'
export function MobileNavigation() {
  let router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function onRouteChange() {
      setIsOpen(false)
    }

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError', onRouteChange)
    }
  }, [router, isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
      >
        <span className="sr-only">Open navigation</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6 stroke-slate-500"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start pr-10 overflow-y-auto bg-slate-900/50 backdrop-blur lg:hidden"
      >
        <Dialog.Panel className="w-full max-w-xs min-h-full px-4 pt-5 pb-12 bg-white dark:bg-slate-900 sm:px-6">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <div className="flex items-center">
            <button type="button" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close navigation</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6 stroke-slate-500"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l14 14M19 5l-14 14" />
              </svg>
            </button>
            <Link href="/">
              <a className="block ml-6 overflow-hidden w-25 lg:w-auto">
                <span className="sr-only">Home page</span>
                <span className="inline text-xl tracking-tight text-transparent bg-gradient-to-br from-indigo-800 via-sky-500 to-indigo-800 dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display">{siteMetadata.title}</span>
              </a>
            </Link>
          </div>
          <Navigation  className="px-1 mt-5" />
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
