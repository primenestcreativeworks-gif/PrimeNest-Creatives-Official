import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PrimeNest Creatives | Founded by Lakshya',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
