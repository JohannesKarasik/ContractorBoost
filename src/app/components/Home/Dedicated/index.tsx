'use client'

import Link from 'next/link'

const plans = [
  {
    name: 'Contractor Starter',
    label: 'Simple',
    price: '$97',
    period: '/mo',
    description: 'A clean, professional online presence for contractors getting started.',
    cta: 'Book A Call',
    href: '#',
    featured: false,
    features: [
      'Functional Website (5 pages)',
      'Contact Form Setup',
      'Mobile Responsive Design',
      'Basic On-Site SEO',
    ],
  },
  {
    name: 'Contractor Advanced',
    label: 'Most Popular',
    price: '$297',
    period: '/mo',
    description: 'Built for growth with lead automation, review generation, and marketing tools.',
    cta: 'Book A Call',
    href: '#',
    featured: true,
    features: [
      'Functional Website (10–20 pages)',
      'Automated Lead Follow Up',
      'Missed Call Text Back',
      '5-Star Magic Review Funnel',
      'One-Click Marketing Campaigns',
      'On-Site SEO',
    ],
  },
  {
    name: 'Contractor Pro',
    label: 'Premium',
    price: '$497',
    period: '/mo',
    description: 'A complete growth system for contractors ready to scale aggressively.',
    cta: 'Book A Call',
    href: '#',
    featured: false,
    dark: true,
    features: [
      'Everything in Advanced',
      'Google Ads Management',
      'Local SEO Boost',
      'Business Phone Setup',
      'Printing Services',
      'Priority Support',
    ],
  },
]

function CheckIcon({ featured = false, dark = false }: { featured?: boolean; dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        featured
          ? 'bg-white/20 text-white'
          : dark
            ? 'bg-white/10 text-white'
            : 'bg-[#07111f]/8 text-[#07111f]'
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='h-3.5 w-3.5'
      >
        <path
          fillRule='evenodd'
          d='M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.42l2.293 2.294 6.493-6.494a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </span>
  )
}

function PlanCard({
  plan,
}: {
  plan: {
    name: string
    label: string
    price: string
    period: string
    description: string
    cta: string
    href: string
    featured?: boolean
    dark?: boolean
    features: string[]
  }
}) {
  const featured = !!plan.featured
  const dark = !!plan.dark

  return (
    <div
      className={`relative h-full rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'border-[#d89d3d]/50 bg-gradient-to-b from-[#d89d3d] to-[#b97d24] text-white shadow-2xl shadow-[#d89d3d]/20'
          : dark
            ? 'border-white/10 bg-[#07111f] text-white shadow-xl shadow-black/10'
            : 'border-black/8 bg-white text-[#07111f] shadow-xl shadow-black/5'
      }`}
    >
      {featured && (
        <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'>
          <div className='rounded-full bg-[#ff4b3e] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg'>
            Most Popular
          </div>
        </div>
      )}

      <div className='flex h-full flex-col p-8 lg:p-9'>
        <div className='mb-8'>
          {!featured && (
            <p
              className={`text-xs font-bold uppercase tracking-[0.24em] ${
                dark ? 'text-white/60' : 'text-[#07111f]/45'
              }`}
            >
              {plan.label}
            </p>
          )}

<h3
  className={`mt-4 text-3xl font-bold tracking-tight ${
    featured || dark ? 'text-white' : 'text-[#07111f]'
  }`}
>
  {plan.name}
</h3>

          <p
            className={`mt-3 text-sm leading-6 ${
              featured ? 'text-white/80' : dark ? 'text-white/70' : 'text-black/55'
            }`}
          >
            {plan.description}
          </p>

          <div className='mt-7 flex items-end justify-center gap-1 text-center lg:justify-start'>
            <span className='text-5xl font-extrabold leading-none'>{plan.price}</span>
            <span
              className={`mb-1 text-base font-medium ${
                featured ? 'text-white/75' : dark ? 'text-white/65' : 'text-black/50'
              }`}
            >
              {plan.period}
            </span>
          </div>
        </div>

        <div
          className={`flex-1 rounded-2xl border p-5 ${
            featured
              ? 'border-white/15 bg-white/10'
              : dark
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-black/6 bg-[#f8fafc]'
          }`}
        >
          <ul className='space-y-4'>
            {plan.features.map((feature) => (
              <li key={feature} className='flex items-start gap-3'>
                <CheckIcon featured={featured} dark={dark} />
                <span
                  className={`text-[15px] leading-6 ${
                    featured ? 'text-white' : dark ? 'text-white/90' : 'text-[#07111f]'
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-auto pt-8'>
          <Link href={plan.href} className='block'>
            <button
              className={`w-full rounded-xl px-6 py-4 text-base font-bold uppercase tracking-[0.12em] transition duration-300 hover:cursor-pointer ${
                featured
                  ? 'bg-white text-[#1c2240] hover:bg-[#f7f7f7]'
                  : dark
                    ? 'bg-[#fec404] text-[#07111f] hover:bg-[#e5b000]'
                    : 'border border-[#07111f] bg-[#07111f] text-white hover:bg-transparent hover:text-[#07111f]'
              }`}
            >
              {plan.cta}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Dedicated = () => {
  return (
    <section id='Pricing' className='relative overflow-hidden bg-[#f8fafc] py-24'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#d89d3d]/10 blur-3xl' />
        <div className='absolute right-[-6rem] top-[20%] h-80 w-80 rounded-full bg-[#07111f]/8 blur-3xl' />
        <div className='absolute bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff4b3e]/10 blur-3xl' />
      </div>

      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='inline-flex rounded-full border border-[#07111f]/10 bg-white px-4 py-1 text-sm font-semibold text-[#07111f]/70 shadow-sm'>
            Pricing Plans
          </span>

          <h2 className='mt-6 text-4xl font-extrabold tracking-tight text-[#07111f] sm:text-5xl'>
            Simple pricing that scales with your business
          </h2>

          <p className='mt-4 text-lg leading-8 text-black/60'>
            Choose the package that matches your current stage, from a professional starter site
            to a fully managed contractor growth system.
          </p>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch'>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dedicated