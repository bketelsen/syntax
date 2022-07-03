import Image from 'next/image'

import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import siteMetadata from '@/data/siteMetadata'


export function Hero({title, text, children}) {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 lg:max-w-6xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="absolute -mb-56 opacity-50 bottom-full right-full -mr-72">
              <Image
                src={blurCyanImage}
                alt=""
                layout="fixed"
                width={530}
                height={530}
                unoptimized
                priority
              />
            </div>
            <div className="relative">
              <p className="inline text-5xl tracking-tight text-transparent bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display">
                {title}
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                {text}
              </p>

            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]" />
            </div>
            <div className="relative">
              <div className="absolute -top-64 -right-64">
                <Image
                  src={blurCyanImage}
                  alt=""
                  layout="fixed"
                  width={530}
                  height={530}
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute -bottom-40 -right-44">
                <Image
                  src={blurIndigoImage}
                  alt=""
                  layout="fixed"
                  width={567}
                  height={567}
                  unoptimized
                  priority
                />
              </div>
             {/*  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
             <div className="absolute inset-0 opacity-5 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300" />*/}

                {children}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
