import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Providers } from '../components/providers'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/navigation/Footer'
import { cn } from '@trinity/ui/lib/utils'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Portuguese Forum Rotary Club',
    template: '%s | Rotary Club',
  },
  description:
    'The Portuguese Forum Rotary Club creates lasting change through community service, leadership, and international fellowship.',
  icons: {
    icon: '/rotary-favicon.svg',
    shortcut: '/rotary-favicon.svg',
    apple: '/rotary-favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', openSans.variable)}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

