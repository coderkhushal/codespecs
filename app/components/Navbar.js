"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
const Navbar = () => {
  const togglecart=()=>{
    if(ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if(!ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")

    }
  }
  const ref= useRef()
  return (
      <div className='lg:fixed w-full'>

        <nav className='z-1 flex overflow-x-hidden bg-slate-100 shadow-md justify-between md:justify-start items-center md:items-start flex-col md:flex-row'>  
            <Link href="/">
            <Image src="/logo.png" alt="image"  width={200} height={100} className='py-3' />
            </Link>
          <ul className='justify-between py-4 grid grid-cols-4 md:flex'>
            <Link href="/"><li className='font-bold mx-3 md:mx-5'>Home</li> </Link>
            <Link href="/contact"><li className='font-bold mx-3 md:mx-5'>Contact</li> </Link>
            <Link href="/about"><li className='font-bold mx-3 md:mx-5'>About</li> </Link>
            <Link href="/products/specs"><li className='font-bold mx-3 md:mx-5'>Specs</li> </Link>

          </ul>
          <ul className='justify-between py-4 grid grid-cols-3 md:flex items-center'>
          
            <Link href="/products/contactlens"><li className='font-bold mx-3 md:mx-5'>Contact Lens</li> </Link>
            <Link href="/products/case"><li className='font-bold mx-3 md:mx-5'>Cases</li> </Link>
            <Link href="/products/cleaningsolution"><li className='font-bold mx-3 md:mx-5'>Cleaning Solution</li> </Link>

          </ul>
          <div onClick={togglecart} className="cart absolute top-0 right-0 mx-2 overflow-x-hidden md:mx-5 my-5 text-lg cursor-pointer"><FaCartArrowDown/></div>
        </nav>

        <div ref={ref} className="sidecart absolute top-0 right-0 bg-orange-100 p-10 transition-transform translate-x-full transform ">
          <h2 className='text-xl'><b>Shopping Cart</b></h2>
          <span onClick={togglecart} className="absolute top-3 right-3 cursor-pointer text-2xl text-orange-500"><IoIosCloseCircle/></span>
          <ol>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
          </ol>
        </div>
      </div>
    
  )
}

export default Navbar
