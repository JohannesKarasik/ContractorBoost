'use client'

import { usePathname } from 'next/navigation'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ClientFormHeader from '@/app/components/Layout/Header/ClientFormHeader'
import ClientFormFooter from '@/app/components/Layout/Header/ClientFormFooter'

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isClientForm = pathname === '/client-form'

  return (
    <>
      {isClientForm ? <ClientFormHeader /> : <Header />}
      {children}
      {isClientForm ? <ClientFormFooter /> : <Footer />}
    </>
  )
}