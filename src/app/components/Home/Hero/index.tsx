'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const people = [
  '/images/hero/person1.png',
  '/images/hero/person2.png',
  '/images/hero/person3.png',
  '/images/hero/person4.png',
  '/images/hero/person5.png',
]

const Hero = () => {
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative z-1 overflow-hidden bg-[#07111f]'>
      <div className='container mx-auto max-w-7xl px-4 pt-24 pb-20'>
        <div className='grid grid-cols-12 items-center gap-8'>
          <div className='col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8'>
            <h1 className='w-full text-white'>
              Website Design & Marketing Systems For Contractors
            </h1>

            <div className='mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              <p className='max-w-3xl text-xl leading-9 text-white/80 font-heading'>
                We cut through the bullsh*t. There’s no magic spell for growing a
                business. We set up the right systems to win — but you have to
                commit to using them.
              </p>

              <div className='shrink-0'>
                <div className='mb-4 flex items-center'>
                  <div className='flex -space-x-3'>
                    {people.map((person, index) => (
                      <div
                        key={index}
                        className='h-12 w-12 overflow-hidden rounded-full border-2 border-[#07111f] bg-white'
                      >
                        <Image
                          src={person}
                          alt={`Client ${index + 1}`}
                          width={48}
                          height={48}
                          className='h-full w-full object-cover'
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <a
  href='https://calendly.com/contractorboost-info/30min'
  target='_blank'
  rel='noopener noreferrer'
  className='block min-w-[220px] rounded-lg bg-[#fec404] px-10 py-4 text-center text-lg font-semibold text-white transition hover:cursor-pointer hover:bg-[#e5b000]'
>
  Book a call
</a>
              </div>
            </div>

            <div className='mt-8 max-w-md overflow-hidden rounded-2xl'>
              <Image
                src='/images/hero/reviews-banner.png'
                alt='Top rated on Google, Facebook and Trustpilot'
                width={1264}
                height={180}
                className='h-auto w-full'
              />
            </div>
          </div>

          <div className='col-span-12 hidden lg:col-span-4 lg:block xl:col-span-4'>
            <div className='ml-auto w-full max-w-[380px]'>
              <Image
                src='/images/hero/banner-image.png'
                alt='banner image'
                width={604}
                height={600}
                className='h-auto w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero