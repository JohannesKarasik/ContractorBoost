'use client'

import Image from 'next/image'

const workItems = [

  {
    src: '/images/articles/example2.png',
    alt: 'Contractor project example 2',
  },
  {
    src: '/images/articles/example3.png',
    alt: 'Contractor project example 3',
  },
  {

    src: '/images/articles/example5.png',
    alt: 'Contractor project example 5',

  },
  {
    src: '/images/articles/example4.png',
    alt: 'Contractor project example 4',
  },
  {
    src: '/images/articles/example6.png',
    alt: 'Contractor project example 6',
  },
  {
    src: '/images/articles/example1.png',
    alt: 'Contractor project example 1',
  },
]

const OurWork = () => {
  return (
    <section id='OurWork' className='overflow-hidden bg-[#f3f3f3] py-10 md:py-12'>
      <div className='mx-auto max-w-[1700px] px-4 md:px-5'>
        <div className='mb-8 text-center md:mb-10'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#d89d3d]'>
            Our Work
          </p>

          <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-[#07111f] sm:text-5xl'>
            See what we’ve done for other contractors
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4'>
          {workItems.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)]'
            >
              <div className='relative aspect-[16/9] w-full'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWork