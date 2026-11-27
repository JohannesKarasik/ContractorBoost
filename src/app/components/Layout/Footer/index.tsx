'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const footerLinks = [
  { label: 'Products', href: '#Products' },
  { label: 'Pricing', href: '#Pricing' },
  { label: 'Testimonials', href: '#Testimonials' },
  { label: 'Our Work', href: '#OurWork' },
  { label: 'Terms & Conditions and Privacy Policy', href: '/terms-and-conditions-and-privacy-policy' },
]

const Footer = () => {
  return (
    <>
      <footer className='bg-[#07111f] py-10' id='Footer'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logodark.png'
              alt='Logo'
              width={160}
              height={48}
              className='h-auto w-auto max-h-12'
            />
          </Link>

          <nav>
            <ul className='flex flex-wrap items-center justify-center gap-6 sm:gap-8'>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm font-medium text-white/85 transition hover:text-white'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between gap-3 text-sm text-white/70 lg:flex-row'>
            <address className='flex flex-col items-center gap-2 not-italic sm:flex-row sm:gap-6'>
              <span>ContractorBoost</span>
              <span>Bakkesvinget 73, 4000 Roskilde, Denmark</span>
              <a href='tel:+4581611852' className='transition hover:text-white'>
                +45 81 61 18 52
              </a>
              <a href='mailto:info@contractorboost.io' className='transition hover:text-white'>
                info@contractorboost.io
              </a>
            </address>
            <p>© {new Date().getFullYear()} ContractorBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Script
        src='https://widgets.leadconnectorhq.com/loader.js'
        data-resources-url='https://widgets.leadconnectorhq.com/chat-widget/loader.js'
        data-widget-id='6b08f370a1da58ee0f9a10e5'
        strategy='afterInteractive'
      />
    </>
  )
}

export default Footer