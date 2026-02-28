import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ATCC | Afkar AlTatWeer Contracting Co.',
  description: 'ATCC is a premier construction company delivering high-quality infrastructure and contracting projects with innovation, engineering expertise, and international standards.',
  keywords: ['construction', 'contracting', 'ATCC', 'Saudi Arabia', 'infrastructure', 'engineering', 'steel structure', 'concrete works'],
  openGraph: {
    title: 'ATCC | Building Excellence Beyond Premium Quality',
    description: 'Premier construction company delivering high-quality infrastructure and contracting projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
