"use client"
import Maincontext from "@/context/maincontext/Maincontext";
import { usemaincontext } from "@/context/maincontext/Mainstate";
import Link from "next/link";
import { useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const page = () => {
    const context= useContext(Maincontext)
    const { cart, addtocart, removefromcart, subtotal } =context


    return (
        <div className='container m-auto'>
            <h1 className='text-xl my-8 font-bold text-center'>Checkout</h1>
            <h2 className='ml-2 font-semibold' >1. Dilivery Details</h2>

            <div className="mx-auto flex my-2">

                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>

                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>



            </div>

            <div className="mx-auto flex my-2">



                <div className="px-2 w-full">
                    <div className="mb-4">

                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                        <textarea cols="30" rows="2" type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>

            </div>

            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">

                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <h2 className='my-2 font-semibold' >2. Review Cart Items</h2>

            <div className="sidecart h-full md:w-full bg-orange-100 p-10  ">

                <ul className='list-decimal font-semibold'>

                    {cart &&  Object.keys(cart).map((key) => {

                        return (
                            <li key={key} className='mt-10'>

                                <div className='flex justify-around my-3 pl-10'>

                                    <div className='w-2/3'>{cart[key].name}</div>:
                                    <div className='w-1/3 pl-3 justify-around flex items-center text-xl ' ><FaCircleMinus className='cursor-pointer' onClick={() => { removefromcart(key, 1) }} /><div className="mx-2">{cart[key].qty}</div><FaPlusCircle className='cursor-pointer' onClick={() => { addtocart(key, 1, cart[key].price, cart[key].name, cart[key].size, cart[key].variant) }} /></div>
                                </div>
                            </li>)
                    })}
                    {cart && Object.keys(cart).length === 0 && <div className='text-center mt-10 font-semibold text-xl '>No items present in the cart</div>}
                    <div className="flex mt-4 font-bold">

                        <div className='mx-5 '>Subtotal : </div>
                        <div className=' ' >{subtotal}</div>
                    </div>


                </ul>


            </div>

            <h2 className='my-2 font-semibold' >3. Payment</h2>
            <Link href="/order">

                <button className="flex mx-auto my-5 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" >Pay   ₹{subtotal}</button>
            </Link>




        </div>
    )
}

export default page
