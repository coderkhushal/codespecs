"use client"
import { Productcontext } from '@/context/Productcontext/Productcontext'
import Maincontext from '@/context/maincontext/Maincontext'
import React, { useContext } from 'react'

const page = () => {
  const context = useContext(Maincontext)
  const {subtotal,cart} = context
  

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Codespecs.com</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #534095u043</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-orange-500  py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Your Order has been created successfully.</p>
        <div className='grid-cols-3'>

        <div class="flex  border-gray-200 py-2 flex-wrap ">

          <span class="text-gray-500">Item Description</span>
          <span class="ml-auto text-gray-900">Quantity</span>
          <span class="ml-auto text-gray-900">Item Total</span>
        </div>
        {cart && Object.keys(cart).map((key)=>        
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500 flex flex-wrap  w-1/3">{key}</span>
          <span class="m-auto text-gray-900">{cart[key].qty}</span>
          <span class="ml-auto text-gray-900">{cart[key].qty * cart[key].price}</span>
        </div>)}
        
          </div>
        
        <div class="flex mt-5">
          <span class="title-font font-medium text-2xl text-gray-900">{subtotal}</span>
          <button class="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Track Order</button>
        </div>

      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default page
