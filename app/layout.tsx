'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${isDarkMode ? 'dark bg-zinc-900' : 'bg-zinc-100'}`}>
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
