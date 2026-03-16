import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import FAQ from '@/app/components/Home/FAQ'
import Articles from '@/app/components/Home/Articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ContractorBoost',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Articles />
      <Aboutus />

      <FAQ />
      <Dedicated />

    </main>
  )
}
