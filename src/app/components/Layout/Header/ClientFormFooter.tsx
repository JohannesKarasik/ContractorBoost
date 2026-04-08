'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const ClientFormFooter = () => {
  return (
    <>
      <footer className='bg-[#07111f] py-10' id='Footer'>
        <div className='mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logodark.png'
              alt='Logo'
              width={160}
              height={48}
              className='h-auto w-auto max-h-12'
            />
          </Link>
        </div>
      </footer>

      <Script
        src='https://beta.leadconnectorhq.com/loader.js'
        data-resources-url='https://beta.leadconnectorhq.com/chat-widget/loader.js'
        data-widget-id='69d5104b3ebfc281e6af5ba5'
        strategy='afterInteractive'
      />
    </>
  )
}

export default ClientFormFooter