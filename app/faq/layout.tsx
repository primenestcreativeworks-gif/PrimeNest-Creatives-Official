import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | PrimeNest Creatives',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
