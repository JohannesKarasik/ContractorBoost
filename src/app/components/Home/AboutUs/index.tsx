'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const reviews = [
  {
    name: 'Contact JGC Inc.',
    initials: 'CJ',
    date: 'Feb 12, 2026',
    text: "Website looks good and they're extremely accessible. Been very good so far and have seen good leads from it.",
  },
  {
    name: 'bradley cassidy',
    initials: 'BC',
    date: 'Feb 12, 2026',
    text: 'Working with Contractor Boost has been great so far. Helping me get set up on Google Business and website live. Just got it set up a week ago and already getting leads.',
  },
  {
    name: 'Salvador Tovar',
    initials: 'ST',
    date: 'Feb 06, 2026',
    text: "Can't recommend enough.",
  },
  {
    name: 'Palmetto Quality Painting',
    initials: 'PQ',
    date: 'Feb 05, 2026',
    text: 'Great experience. I highly recommend their professional services for any needs, as they demonstrate expertise, reliability, and excellent customer support.',
  },
  {
    name: 'James Bowling',
    initials: 'JB',
    date: 'Feb 12, 2026',
    text: 'The guys over at Contractor Boost are great and got it all done on time. I highly recommend them.',
  },
  {
    name: 'Mike Swallows',
    initials: 'MS',
    date: 'Feb 07, 2026',
    text: 'Danny and Joe were great. Very helpful and good at communicating. Thank you so much.',
  },
  {
    name: 'Tony Davis',
    initials: 'TD',
    date: 'Feb 06, 2026',
    text: 'Where do I start? They got everything we needed set up within just a couple of days. They responded to my texts and were always there to explain things and help with any questions I had about our new system. I wish I could give more than five stars.',
  },
  {
    name: 'Jared Walsh',
    initials: 'JW',
    date: 'Feb 05, 2026',
    text: 'Contractor Boost is the real deal. I got screwed over by a couple marketing companies before, but this company kept their promises and got me set up with a new website in under a week.',
  },
]

const extraReviews = [
  {
    name: 'Chris Martin',
    initials: 'CM',
    date: 'Feb 04, 2026',
    text: 'Very solid experience. They moved fast, communicated clearly, and got our new website looking a lot more professional than what we had before.',
  },
  {
    name: 'Luis Hernandez',
    initials: 'LH',
    date: 'Feb 03, 2026',
    text: 'These guys know what they are doing. They helped us get everything dialed in and made the whole process way easier than I expected.',
  },
  {
    name: 'Ryan Cooper',
    initials: 'RC',
    date: 'Feb 02, 2026',
    text: 'Contractor Boost helped us get our online presence cleaned up fast. Good communication, fast turnaround, and they actually followed through on what they said.',
  },
  {
    name: 'Mason Brooks',
    initials: 'MB',
    date: 'Jan 30, 2026',
    text: 'Our old site was outdated and not bringing in much. The new setup looks way better and already feels like a stronger first impression for customers.',
  },
  {
    name: 'Derek Hill',
    initials: 'DH',
    date: 'Jan 28, 2026',
    text: 'Really happy with the service. They answered questions quickly, kept us updated, and got our site launched without dragging the process out.',
  },
  {
    name: 'Cole Thompson',
    initials: 'CT',
    date: 'Jan 26, 2026',
    text: 'I have dealt with other marketing companies before and this was a completely different experience. Straightforward, helpful, and they delivered what they promised.',
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
  }
}) => {
  return (
    <div className='break-inside-avoid rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'>
      <div className='mb-7 flex items-start justify-between gap-4'>
        <StarRow />
        <span className='whitespace-nowrap text-[15px] font-medium text-[#6b778c]'>
          {review.date}
        </span>
      </div>

      <p className='min-h-[120px] text-[18px] leading-10 text-[#313741] sm:text-[17px] sm:leading-9'>
        {review.text}
      </p>

      <div className='mt-8 flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#a3abc0] text-sm font-bold text-white'>
            {review.initials}
          </div>
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
  const [showMore, setShowMore] = useState(false)

  const visibleReviews = showMore ? [...reviews, ...extraReviews] : reviews

  return (
    <section
      id='Testimonials'
      className='relative overflow-hidden bg-[#f3f4f6] py-24'
    >
      <div className='container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#f4b400]'>
            Testimonials
          </p>

          <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl'>
            Google reviews from our clients
          </h2>

          <p className='mt-5 text-lg leading-8 text-[#6b7280]'>
            See why contractors and local businesses trust us to help them grow
            online, generate leads, and build a stronger presence.
          </p>

          <div className='mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-black/5'>
            <GoogleIcon />
            <div className='flex items-center gap-2'>
              <span className='text-base font-semibold text-[#111827]'>
                Google Reviews
              </span>
              <span className='text-[#f4b400]'>•</span>
              <span className='text-base font-semibold text-[#111827]'>5.0</span>
            </div>
          </div>
        </div>

        <div className='columns-1 gap-6 space-y-6 md:columns-2 xl:columns-4'>
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.date}-${index}`}
              review={review}
            />
          ))}
        </div>

        {!showMore && (
          <div className='mt-12 flex justify-center'>
            <button
              onClick={() => setShowMore(true)}
              className='rounded-xl bg-[#07111f] px-8 py-4 text-base font-semibold text-white transition hover:cursor-pointer hover:bg-[#0d1b2d]'
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials