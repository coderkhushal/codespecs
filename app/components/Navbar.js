"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useRef, useEffect } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut, useSession } from 'next-auth/react';
import Avatar from './Avatar';
import Cart from './Cart';
import Maincontext from '@/context/maincontext/Maincontext';

const Navbar = () => {
 const session= useSession()
     
 const context = useContext(Maincontext)
 const { subtotal,setsubtotal, setcart } = context

  const setSubtotal=(fetchedcart)=>{        
    let subt=0;
    let cartKeys= Object.keys(fetchedcart);
    for(let i= 0;i<cartKeys.length;i++){
      subt+= fetchedcart[cartKeys[i]].qty * fetchedcart[cartKeys[i]].price
    }
    setsubtotal(subt)}
  useEffect(() => {
    try {

      if (localStorage.getItem("cart")) {
        let fetchedcart = JSON.parse(localStorage.getItem("cart"))
        setcart(fetchedcart)
        setSubtotal(fetchedcart)
        
        

      }
    }
    catch (err) {
      console.log(err)
      localStorage.clear()
    }

  }, [subtotal])

  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")

    }
  }
  const ref = useRef()
  return (
    <div className='md:fixed sticky top-0 w-full z-10' >

      <nav className='flex  overflow-x-hidden bg-slate-100 shadow-md justify-between md:justify-start items-center md:items-start flex-col md:flex-row'>
        <Link href="/">
          <Image src="/logo.png" alt="image" width={200} height={100} className='py-3' />
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
        <div>
          <button className='cart absolute top-0 right-[30px] mx-2  md:mx-5 my-4 text-2xl cursor-pointer'>
          {(session?.status=="unauthenticated")?( <Link href="/auth/login" className='bg-orange-500 rounded-full px-2 border-gray-400'>Login</Link>):<Avatar/>}
          </button>
        </div>

      <Cart reference={ref}/>

        <div onClick={togglecart} className="cart absolute z-[11] top-0 right-0 mx-2 overflow-x-hidden md:mx-5 my-5 text-xl cursor-pointer"><FaCartArrowDown /></div>
      </nav>  

    </div>

  )
}

export default Navbar