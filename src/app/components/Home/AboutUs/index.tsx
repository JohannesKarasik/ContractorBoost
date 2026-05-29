'use client'

import React, { useMemo, useState } from 'react'
import { Icon } from '@iconify/react'

type Review = {
  name: string
  initials: string
  date: string
  text: string
  image: string
  platform: 'google' | 'trustpilot'
  video?: string
  thumbnail?: string
}

const reviews: Review[] = [
  {
    name: 'All Weather Maintenance.',
    initials: 'CG',
    date: 'Nov 18, 2025',
    text: "I've been working with them for over a month now, and they've been giving me leads and increasing my sales by about 50%. I have nothing but good things to say about Joe and ContractorBoost.",
    image: '/reviews/awmlogo.png',
    platform: 'trustpilot',
    video: '/reviews/videoreview1.mov',
    thumbnail: '/reviews/thumbnail1.png',
  },
  {
    name: 'bradley cassidy',
    initials: 'BC',
    date: 'Aug 09, 2024',
    text: 'Working with Contractor Boost has been great so far. Helping me get set up on Google Business and website live. Just got it set up a week ago and already getting leads.',
    image: '/reviews/bradley-cassidy.png',
    platform: 'trustpilot',
  },
  {
    name: 'Salvador Tovar',
    initials: 'ST',
    date: 'Feb 06, 2026',
    text: "Can't recommend enough.",
    image: '/reviews/salvadortovar.png',
    platform: 'google',
  },
  {
    name: 'Palmetto Quality Painting',
    initials: 'PQ',
    date: 'May 21, 2025',
    text: 'Great experience. I highly recommend ContractorBoost, they where honest with me when there was a delay with the website and always answered fast. Got my website 2 months ago now and it has transformed my business with consistent leads from the website.',
    image: '/reviews/palmetto-quality-painting.png',
    platform: 'trustpilot',
  },
  {
    name: 'James Bowling',
    initials: 'JB',
    date: 'Oct 03, 2023',
    text: 'The guys over at Contractor Boost are great and got it all done on time. I highly recommend them.',
    image: '/reviews/james-bowling.png',
    platform: 'google',
  },
  {
    name: 'Mike Swallows',
    initials: 'MS',
    date: 'Jul 14, 2024',
    text: 'Connor and Joe were great. Very helpful and good at communicating. Thank you so much.',
    image: '/reviews/mike-swallows.png',
    platform: 'google',
  },
  {
    name: 'Tony Davis',
    initials: 'TD',
    date: 'Jan 24, 2026',
    text: 'Where do I start? They got everything we needed set up within just a couple of days. They responded to my texts and were always there to explain things and help with any questions I had about our new system. I wish I could give more than five stars.',
    image: '/reviews/tony-davis.png',
    platform: 'google',
  },
  {
    name: 'Jared Walsh',
    initials: 'JW',
    date: 'Mar 11, 2025',
    text: 'Contractor Boost is the real deal. I got screwed over by a couple marketing companies that tried to sell me a line of BS, but Joe and Connor kept their promises and got me set up with a new website in under a week.',
    image: '/reviews/jared-walsh.png',
    platform: 'trustpilot',
  },
]

const extraReviews: Review[] = [
  {
    name: 'Chris Martin',
    initials: 'CM',
    date: 'Dec 07, 2023',
    text: 'Very solid experience. They moved fast, communicated clearly, and got our new website looking a lot more professional than what we had before.',
    image: '/reviews/chris-martin.png',
    platform: 'trustpilot',
  },
  {
    name: 'Luis Hernandez',
    initials: 'LH',
    date: 'Sep 16, 2025',
    text: 'These guys know what they are doing. They helped us get everything dialed in and made the whole process way easier than I expected.',
    image: '/reviews/luis-hernandez.png',
    platform: 'trustpilot',
  },
  {
    name: 'Ryan Cooper',
    initials: 'RC',
    date: 'Jun 28, 2024',
    text: 'Contractor Boost helped us get our online presence cleaned up fast. Good communication, fast turnaround, and they actually followed through on what they said.',
    image: '/reviews/ryan-cooper.png',
    platform: 'google',
  },
  {
    name: 'Mason Brooks',
    initials: 'MB',
    date: 'Apr 05, 2023',
    text: 'Our old site was outdated and not bringing in much. The new setup looks way better and already feels like a stronger first impression for customers.',
    image: '/reviews/mason-brooks.png',
    platform: 'trustpilot',
  },
  {
    name: 'Derek Hill',
    initials: 'DH',
    date: 'Feb 12, 2025',
    text: 'Really happy with the service. They answered questions quickly, kept us updated, and got our site launched without dragging the process out.',
    image: '/reviews/derek-hill.png',
    platform: 'trustpilot',
  },
  {
    name: 'Cole Thompson',
    initials: 'CT',
    date: 'Nov 29, 2023',
    text: 'I have dealt with other marketing companies before and this was a completely different experience. Straightforward, helpful, and they delivered what they promised.',
    image: '/reviews/cole-thompson.png',
    platform: 'trustpilot',
  },
]

const StarRow = () => (
  <div className='flex items-center gap-1 text-[#f4b400]'>
    <span className='mr-1 text-[22px] font-bold leading-none'>5</span>
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} icon='material-symbols:star-rounded' className='h-7 w-7' />
    ))}
  </div>
)

const GoogleIcon = () => (
  <Icon icon='logos:google-icon' className='h-8 w-8 shrink-0' />
)

const TrustpilotIcon = () => (
  <img
    src='/reviews/trustpilot.png'
    alt='Trustpilot'
    className='h-7 w-auto shrink-0 object-contain'
  />
)

const TEXT_LIMIT = 120

const VideoPlayer = ({ src, thumbnail }: { src: string; thumbnail?: string }) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 0)
  }

  return (
    <div className='relative mb-6 overflow-hidden rounded-2xl bg-black'>
      {!playing && thumbnail ? (
        <div className='relative cursor-pointer' onClick={handlePlay}>
          <img
            src={thumbnail}
            alt='Video thumbnail'
            className='aspect-video w-full rounded-2xl object-cover'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 hover:scale-110'>
              <Icon
                icon='material-symbols:play-arrow-rounded'
                className='h-9 w-9 translate-x-0.5 text-[#111827]'
              />
            </div>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          controls
          playsInline
          autoPlay={playing}
          className='aspect-video w-full rounded-2xl bg-black'
        >
          <source src={src} type='video/mp4' />
        </video>
      )}
    </div>
  )
}

const ReviewCard = ({ review }: { review: Review }) => {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > TEXT_LIMIT
  const displayText =
    !review.video && isLong && !expanded
      ? review.text.slice(0, TEXT_LIMIT).trimEnd() + '…'
      : review.text

  return (
    <div className='flex h-full w-full flex-col rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'>
      <div className='mb-6 flex items-start justify-between gap-4'>
        <StarRow />
        <span className='whitespace-nowrap text-[15px] font-medium text-[#6b778c]'>
          {review.date}
        </span>
      </div>

      {review.video && (
        <VideoPlayer src={review.video} thumbnail={review.thumbnail} />
      )}

      <div className='flex-1'>
        <p className='text-[18px] leading-8 text-[#313741] sm:text-[17px] sm:leading-8'>
          {displayText}
        </p>
        {!review.video && isLong && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className='mt-1 text-[14px] font-semibold text-[#f4b400] hover:underline'
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      <div className='mt-6 flex items-center justify-between gap-4'>
        <div className='flex min-w-0 items-center gap-3'>
          <img
            src={review.image}
            alt={review.name}
            className='h-12 w-12 shrink-0 rounded-full object-cover'
          />
          <span className='truncate text-[16px] font-medium text-[#667085]'>
            {review.name}
          </span>
        </div>
        {review.platform === 'trustpilot' ? <TrustpilotIcon /> : <GoogleIcon />}
      </div>
    </div>
  )
}

type Group =
  | { type: 'video'; review: Review; originalIndex: number }
  | { type: 'pair'; reviews: [Review, Review] | [Review]; originalIndices: [number] | [number, number] }

function buildGroups(allReviews: Review[]): Group[] {
  const groups: Group[] = []
  let i = 0
  while (i < allReviews.length) {
    const review = allReviews[i]
    if (review.video) {
      groups.push({ type: 'video', review, originalIndex: i })
      i++
    } else {
      const next = allReviews[i + 1]
      if (next && !next.video) {
        groups.push({ type: 'pair', reviews: [review, next], originalIndices: [i, i + 1] })
        i += 2
      } else {
        groups.push({ type: 'pair', reviews: [review], originalIndices: [i] })
        i++
      }
    }
  }
  return groups
}

const Testimonials = () => {
  const allReviews = useMemo(() => [...reviews, ...extraReviews], [])
  const groups = useMemo(() => buildGroups(allReviews), [allReviews])

  const [currentIndex, setCurrentIndex] = useState(0)

  // On mobile we show 1 group at a time, on desktop 2
  const [isMobile, setIsMobile] = useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const visibleGroups = isMobile ? 1 : 2

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= groups.length - (visibleGroups - 1) ? 0 : prev + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? groups.length - visibleGroups : prev - 1
    )
  }

  // On mobile each group is 100% wide (1 slot = 100%).
  // On desktop each column-unit = 25%, video = 2 units, pair = 1 unit.
  const groupOffsets = useMemo(() => {
    const offsets: number[] = []
    let offset = 0
    for (const g of groups) {
      offsets.push(offset)
      offset += g.type === 'video' ? 2 : 1
    }
    return offsets
  }, [groups])

  const translatePct = isMobile
    ? currentIndex * 100
    : groupOffsets[currentIndex] * 25

  return (
    <section
      id='Testimonials'
      className='relative overflow-hidden bg-[#f3f4f6] py-16 sm:py-24'
    >
      <div className='mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-10 max-w-3xl text-center sm:mb-16'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#f4b400]'>
            Testimonials
          </p>
          <h2 className='mt-4 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl'>
            The proof is in the pudding. See what our clients have to say.
          </h2>
        </div>

        <div className='relative overflow-hidden'>
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 sm:left-2 sm:p-3'
          >
            <Icon icon='mdi:chevron-left' className='h-5 w-5 sm:h-6 sm:w-6' />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 sm:right-2 sm:p-3'
          >
            <Icon icon='mdi:chevron-right' className='h-5 w-5 sm:h-6 sm:w-6' />
          </button>

          {/* Mobile: each group is full width, stacked cards in a column */}
          {/* Desktop: mosaic layout with 25%-unit columns */}
          <div
            className='flex items-stretch transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {groups.map((group, gi) => {
              if (group.type === 'video') {
                return (
                  <div
                    key={`video-${gi}`}
                    className='w-full shrink-0 px-8 sm:px-3 md:w-2/4'
                  >
                    <ReviewCard review={group.review} />
                  </div>
                )
              }

              return (
                <div
                  key={`pair-${gi}`}
                  className='flex w-full shrink-0 flex-col gap-6 px-8 sm:px-3 md:w-1/4'
                >
                  {group.reviews.map((r, ri) => (
                    <div key={ri} className='flex-1'>
                      <ReviewCard review={r} />
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile dot indicators */}
        <div className='mt-6 flex justify-center gap-2 md:hidden'>
          {groups.map((_, gi) => (
            <button
              key={gi}
              onClick={() => setCurrentIndex(gi)}
              className={`h-2 rounded-full transition-all duration-300 ${
                gi === currentIndex ? 'w-6 bg-[#f4b400]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials