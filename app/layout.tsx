import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'sonner';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PrimeNest Creatives | Premium Video Editing Agency for YouTubers & Creators',
  description: 'India-based premium video editing agency specialising in short form, long form and podcast editing for creators worldwide.',
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
