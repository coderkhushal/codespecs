"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codespecs.com - See The Code!',
  description: 'Ecommerce Store for every type of Specs for developers as well as non developers',
}

export default function RootLayout({ children }) {
  const[cart, setcart] = useState()
  const[subtotal, setsubtotal] = useState()
  return (
    <html lang="en">
      <body className={`${inter.className} `} >
        <Navbar />
        {children}
        <Footer/>
        </body>

    </html>
  )
}
