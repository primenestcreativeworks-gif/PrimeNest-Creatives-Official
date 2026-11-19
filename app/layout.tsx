import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner';
import './globals.css'

export const metadata: Metadata = {
  title: 'PrimeNest Creatives | Your end-to-end content post-production team',
  description: 'Post-production specialists. Editing, not filming. We serve brands, founders, creators, coaches, educators, finance creators, and podcasters with YouTube long-form, shorts, podcasts, and packaging.',
  generator: 'PrimeNest Creatives',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Force purge any old cached theme from localStorage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{localStorage.removeItem('theme');document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#030303] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] min-h-screen">
        {children}
        <Analytics />
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  )
}
