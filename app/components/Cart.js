"use client"
import React, { useContext } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import Maincontext from '@/context/maincontext/Maincontext';
import Link from 'next/link';

const Cart = ({reference}) => {
    
    const context = useContext(Maincontext)
    const { cart, addtocart, clearcart, subtotal,setsubtotal,  removefromcart, setcart } = context
    const togglecart = () => {
        if (reference.current.classList.contains("translate-x-full")) {
          reference.current.classList.remove("translate-x-full")
          reference.current.classList.add("translate-x-0")
        }
        else if (reference.current.classList.contains("translate-x-0")) {
          reference.current.classList.remove("translate-x-0")
          reference.current.classList.add("translate-x-full")
    
        }
      }
  return (
    
              <div ref={reference} className="sidecart z-[12] h-full md:w-[30rem] fixed top-0 right-0 bg-orange-100 p-10 transition-transform translate-x-full  transform ">
        <h2 className='text-xl text-center mb-2'><b>Shopping Cart</b></h2>
        <span onClick={togglecart} className="absolute top-3 right-3 cursor-pointer text-2xl text-orange-500"><IoIosCloseCircle /></span>
        <ul className='list-decimal font-semibold'>

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

        </ul>


      </div>
    
  )
}

export default Cart