import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Page Title',
    default: 'Page Title',
  },
  description: 'Page description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <main className="mx-auto max-w-[1440px] antialiased">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
