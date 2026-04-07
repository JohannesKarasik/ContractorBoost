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
      </footer>

      <Script
        src="https://beta.leadconnectorhq.com/loader.js" 
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="69d5104b3ebfc281e6af5ba5"
        strategy='afterInteractive'
      />
    </>
  )
}

export default Footer