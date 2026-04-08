import { Manrope } from 'next/font/google'
import './globals.css'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import LayoutShell from '@/app/components/Layout/LayoutShell'

const font = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <Aoscompo>
          <LayoutShell>{children}</LayoutShell>
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}