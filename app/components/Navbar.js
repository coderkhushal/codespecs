"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useRef, useEffect } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import Maincontext from '@/context/maincontext/Maincontext';
const Navbar = () => {
  const context = useContext(Maincontext)
  const { cart, addtocart, clearcart, subtotal,setsubtotal,  removefromcart, setcart } = context
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
    else if (!ref.current.classList.contains("translate-x-full")) {
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
        <Link href="/auth/login">
          <MdAccountCircle className='cart absolute top-0 right-8 mx-2 overflow-x-hidden md:mx-5 my-4 text-2xl cursor-pointer' />
        </Link>
        <div onClick={togglecart} className="cart absolute top-0 right-0 mx-2 overflow-x-hidden md:mx-5 my-5 text-lg cursor-pointer"><FaCartArrowDown /></div>
      </nav>

      <div ref={ref} className="sidecart h-full md:w-[30rem] fixed top-0 right-0 bg-orange-100 p-10 transition-transform translate-x-full transform ">
        <h2 className='text-xl text-center mb-2'><b>Shopping Cart</b></h2>
        <span onClick={togglecart} className="absolute top-3 right-3 cursor-pointer text-2xl text-orange-500"><IoIosCloseCircle /></span>
        <ol className='list-decimal font-semibold'>

          {cart && Object.keys(cart).map((key) => {

            return (
              <li key={key} className='mt-10'>

                <div className='flex justify-around my-3'>

                  <div className='w-2/3'>{cart[key].name} {cart[key].size}{cart[key].variant?cart[key].variant :""}</div>:
                  <div className='w-1/3 px-3 justify-around flex items-center text-xl ' >
                    <FaCircleMinus className='cursor-pointer ' onClick={() => { removefromcart(key, 1) }} />
                    <div> {cart[key].qty}</div>
                    <FaPlusCircle className='cursor-pointer' onClick={() => {  addtocart(key, 1, cart[key].price, cart[key].name, cart[key].size, cart[key].variant) }} />
                  </div>
                </div>
              </li>)
          })}
          {Object.keys(cart).length === 0 && <div className='text-center mt-10 font-semibold text-xl '>No items present in the cart</div>}

          <div className="flex mt-4 font-bold">

            <div className='mx-5 '>Subtotal : </div>
            <div >₹{subtotal}</div>
          </div>

          <Link href="/checkingout">

            <button className="flex mx-auto mt-10 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" ><FaShoppingBag className='mx-2 mt-1' />Checkout</button>
          </Link>
          <button className="flex mx-auto mt-5 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" onClick={clearcart}>Clear Cart</button>

        </ol>


      </div>
    </div>

  )
}

export default Navbar