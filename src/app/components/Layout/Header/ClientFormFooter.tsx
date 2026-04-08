'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const ClientFormFooter = () => {
  return (
    <>


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