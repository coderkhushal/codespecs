"use client"
import { Productcontext } from '@/context/Productcontext/Productcontext'
import Maincontext from '@/context/maincontext/Maincontext'
import React, { useContext } from 'react'

const Page = ({params}) => {
  const context = useContext(Maincontext)
  const {subtotal,cart} = context
  

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Codespecs.com</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #{params.orderid}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-orange-500  py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">Your Order has been created successfully.</p>
        <div className='grid-cols-3'>

        <div className="flex  border-gray-200 py-2 flex-wrap ">

          <span className="text-gray-500">Item Description</span>
          <span className="ml-auto text-gray-900">Quantity</span>
          <span className="ml-auto text-gray-900">Item Total</span>
        </div>
        {cart && Object.keys(cart).map((key)=>        
        <div key={key} className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500 flex flex-wrap  w-1/3">{key}</span>
          <span className="m-auto text-gray-900">{cart[key].qty}</span>
          <span className="ml-auto text-gray-900">{cart[key].qty * cart[key].price}</span>
        </div>)}
        
          </div>
        
        <div className="flex mt-5">
          <span className="title-font font-medium text-2xl text-gray-900">{subtotal}</span>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Track Order</button>
        </div>

      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Page
