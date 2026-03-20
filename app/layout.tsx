import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'sonner';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PrimeNest Creative | Premium Content Production Agency',
  description: 'We build content that looks premium and performs even better. Video editing, thumbnails, AI content, and social media growth.',
  generator: 'v0.app',
  icons: {
    icon: '/sitelogo.png',
    apple: '/sitelogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
