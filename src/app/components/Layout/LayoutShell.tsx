'use client'

import { usePathname } from 'next/navigation'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideHeaderFooter = pathname === '/client-form'

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  )
}