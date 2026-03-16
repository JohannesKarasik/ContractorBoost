'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react'

const reviews = [
  {
    name: 'Contact JGC Inc.',
    initials: 'CJ',
    date: 'Feb 12, 2026',
    text: "Website looks good and they're extremely accessible. Been very good so far and have seen good leads from it.",
    image: '/reviews/jgc-inc.png',
  },
  {
    name: 'bradley cassidy',
    initials: 'BC',
    date: 'Feb 12, 2026',
    text: 'Working with Contractor Boost has been great so far. Helping me get set up on Google Business and website live. Just got it set up a week ago and already getting leads.',
    image: '/reviews/bradley-cassidy.png',
  },
  {
    name: 'Salvador Tovar',
    initials: 'ST',
    date: 'Feb 06, 2026',
    text: "Can't recommend enough.",
    image: '/reviews/salvadortovar.png',
  },
  {
    name: 'Palmetto Quality Painting',
    initials: 'PQ',
    date: 'Feb 05, 2026',
    text: 'Great experience. I highly recommend their professional services for any needs, as they demonstrate expertise, reliability, and excellent customer support.',
    image: '/reviews/palmetto-quality-painting.png',
  },
  {
    name: 'James Bowling',
    initials: 'JB',
    date: 'Feb 12, 2026',
    text: 'The guys over at Contractor Boost are great and got it all done on time. I highly recommend them.',
    image: '/reviews/james-bowling.png',
  },
  {
    name: 'Mike Swallows',
    initials: 'MS',
    date: 'Feb 07, 2026',
    text: 'Danny and Joe were great. Very helpful and good at communicating. Thank you so much.',
    image: '/reviews/mike-swallows.png',
  },
  {
    name: 'Tony Davis',
    initials: 'TD',
    date: 'Feb 06, 2026',
    text: 'Where do I start? They got everything we needed set up within just a couple of days. They responded to my texts and were always there to explain things and help with any questions I had about our new system. I wish I could give more than five stars.',
    image: '/reviews/tony-davis.png',
  },
  {
    name: 'Jared Walsh',
    initials: 'JW',
    date: 'Feb 05, 2026',
    text: 'Contractor Boost is the real deal. I got screwed over by a couple marketing companies before, but this company kept their promises and got me set up with a new website in under a week.',
    image: '/reviews/jared-walsh.png',
  },
]

const extraReviews = [
  {
    name: 'Chris Martin',
    initials: 'CM',
    date: 'Feb 04, 2026',
    text: 'Very solid experience. They moved fast, communicated clearly, and got our new website looking a lot more professional than what we had before.',
    image: '/reviews/chris-martin.png',
  },
  {
    name: 'Luis Hernandez',
    initials: 'LH',
    date: 'Feb 03, 2026',
    text: 'These guys know what they are doing. They helped us get everything dialed in and made the whole process way easier than I expected.',
    image: '/reviews/luis-hernandez.png',
  },
  {
    name: 'Ryan Cooper',
    initials: 'RC',
    date: 'Feb 02, 2026',
    text: 'Contractor Boost helped us get our online presence cleaned up fast. Good communication, fast turnaround, and they actually followed through on what they said.',
    image: '/reviews/ryan-cooper.png',
  },
  {
    name: 'Mason Brooks',
    initials: 'MB',
    date: 'Jan 30, 2026',
    text: 'Our old site was outdated and not bringing in much. The new setup looks way better and already feels like a stronger first impression for customers.',
    image: '/reviews/mason-brooks.png',
  },
  {
    name: 'Derek Hill',
    initials: 'DH',
    date: 'Jan 28, 2026',
    text: 'Really happy with the service. They answered questions quickly, kept us updated, and got our site launched without dragging the process out.',
    image: '/reviews/derek-hill.png',
  },
  {
    name: 'Cole Thompson',
    initials: 'CT',
    date: 'Jan 26, 2026',
    text: 'I have dealt with other marketing companies before and this was a completely different experience. Straightforward, helpful, and they delivered what they promised.',
    image: '/reviews/cole-thompson.png',
  },
]

const StarRow = () => {
  return (
    <div className='flex items-center gap-1 text-[#f4b400]'>
      <span className='mr-1 text-[22px] font-bold leading-none'>5</span>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} icon='material-symbols:star-rounded' className='h-7 w-7' />
      ))}
    </div>
  )
}

const GoogleIcon = () => {
  return <Icon icon='logos:google-icon' className='h-8 w-8 shrink-0' />
}

const ReviewCard = ({
  review,
}: {
  review: {
    name: string
    initials: string
    date: string
    text: string
    image: string
  }
}) => {
  return (
    <div className='h-full rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'>
      <div className='mb-7 flex items-start justify-between gap-4'>
        <StarRow />
        <span className='whitespace-nowrap text-[15px] font-medium text-[#6b778c]'>
          {review.date}
        </span>
      </div>

      <p className='min-h-[120px] text-[18px] leading-8 text-[#313741] sm:text-[17px] sm:leading-8'>
        {review.text}
      </p>

      <div className='mt-8 flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <img
            src={review.image}
            alt={review.name}
            className='h-12 w-12 rounded-full object-cover'
          />
          <span className='text-[16px] font-medium text-[#667085]'>
            {review.name}
          </span>
        </div>

        <GoogleIcon />
      </div>
    </div>
  )
}

const Testimonials = () => {
  const allReviews = useMemo(() => [...reviews, ...extraReviews], [])
  const extendedReviews = useMemo(
    () => [...allReviews, ...allReviews, ...allReviews],
    [allReviews]
  )

  const [currentIndex, setCurrentIndex] = useState(allReviews.length)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsTransitioning(true)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentIndex >= allReviews.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(allReviews.length)
      }, 700)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, allReviews.length])

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })

      return () => cancelAnimationFrame(raf)
    }
  }, [isTransitioning])

  return (
    <section
      id='Testimonials'
      className='relative overflow-hidden bg-[#f3f4f6] py-24'
    >
      <div className='mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#f4b400]'>
            Testimonials
          </p>

          <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl'>
            The proof is in the pudding. See what our clients have to say about us
          </h2>
        </div>

        <div className='overflow-hidden'>
          <div
            className={`flex ${
              isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            }}
          >
            {extendedReviews.map((review, index) => (
              <div
                key={`${review.name}-${review.date}-${index}`}
                className='w-full shrink-0 px-3 md:w-1/2 xl:w-1/4'
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials