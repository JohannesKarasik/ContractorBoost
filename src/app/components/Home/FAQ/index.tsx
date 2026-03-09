'use client'

import React from 'react'
import { Icon } from '@iconify/react'

const services = [
  {
    title: 'Functional Website',
    description:
      'Get a lead-generating website built for your contracting business in just days.',
    icon: 'solar:window-frame-linear',
  },
  {
    title: 'Missed Call Text Back',
    description:
      'Automatically text back missed calls so you never lose another lead.',
    icon: 'solar:smartphone-2-linear',
  },
  {
    title: 'Printing Services',
    description:
      'Put your business out there both online and offline with branded materials.',
    icon: 'solar:printer-linear',
  },
  {
    title: 'All-In-One Inbox',
    description:
      'Keep all your messages, leads, and conversations in one place.',
    icon: 'solar:inbox-linear',
  },
  {
    title: 'Business Phone',
    description:
      'Separate your business and personal calls with a dedicated business line.',
    icon: 'solar:phone-linear',
  },
  {
    title: 'Local SEO',
    description:
      'Actually get found on Google when people search for your services nearby.',
    icon: 'solar:magnifer-linear',
  },
  {
    title: '5-Star Magic Review Funnel',
    description:
      'Get more 5-star reviews while reducing the chances of bad ones.',
    icon: 'solar:star-linear',
  },
  {
    title: 'One-Click Marketing Campaigns',
    description:
      'Stay in front of past customers with fast and easy marketing campaigns.',
    icon: 'solar:document-text-linear',
  },
  {
    title: 'Automated Lead Follow Up',
    description:
      'Automatically follow up with leads by text so more jobs get booked.',
    icon: 'solar:clipboard-check-linear',
  },
]

const ServiceCard = ({
  service,
}: {
  service: {
    title: string
    description: string
    icon: string
  }
}) => {
  return (
    <div className='rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]'>
      <div className='flex items-start gap-4'>
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f3f4f6]'>
          <Icon icon={service.icon} className='h-6 w-6 text-[#07111f]' />
        </div>

        <div className='min-w-0'>
          <h3 className='text-[22px] font-bold leading-tight tracking-tight text-[#111827]'>
            {service.title}
          </h3>
          <p className='mt-2 text-[15px] leading-7 text-[#8b95a1]'>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <section
      id='Products'
      className='relative overflow-hidden bg-[#f3f4f6] py-20'
    >
      <div className='container mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-xs font-bold uppercase tracking-[0.28em] text-[#f4b400]'>
            Products & Services
          </p>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl'>
            Systems and tools built for contractors
          </h2>

          <p className='mt-4 text-base leading-7 text-[#6b7280]'>
            Everything we offer is designed to help contractors get more leads,
            close more jobs, and build a stronger presence online.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products