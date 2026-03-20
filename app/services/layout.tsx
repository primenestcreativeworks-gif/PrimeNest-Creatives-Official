import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | PrimeNest Creatives',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
