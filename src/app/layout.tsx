import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://completequarters.com'),
  title: {
    default: 'Complete Quarters | Coming Soon',
    template: '%s | Complete Quarters',
  },
  description:
    'Practical living, property, and household operations resources are being organized here.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://completequarters.com/',
    siteName: 'Complete Quarters',
    title: 'Complete Quarters | Coming Soon',
    description:
      'Practical living, property, and household operations resources are being organized here.',
  },
  twitter: {
    card: 'summary',
    title: 'Complete Quarters | Coming Soon',
    description:
      'Practical living, property, and household operations resources are being organized here.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
