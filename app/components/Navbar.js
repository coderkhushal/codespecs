import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    
        <nav className='z-1 sticky clear-both top-0 flex bg-slate-100 shadow-md justify-between md:justify-start items-center md:items-start flex-col md:flex-row'>  
            <Link href="/">
            <Image src="/logo.png" alt="image"  width={200} height={100} className='py-3' />
            </Link>
          <ul className='flex justify-between py-4 '>
            <Link href="/"><li className='font-bold mx-3 md:mx-5'>Home</li> </Link>
            <Link href="/contact"><li className='font-bold mx-3 md:mx-5'>Contact</li> </Link>
            <Link href="/about"><li className='font-bold mx-3 md:mx-5'>About</li> </Link>
            <Link href="/products/specs"><li className='font-bold mx-3 md:mx-5'>Specs</li> </Link>
          </ul>
          <div className="cart fixed right-0 mx-2 md:mx-5 my-5 text-lg cursor-pointer"><FaCartArrowDown/></div>
        </nav>
    
  )
}

export default Navbar
