"use client"

import { useproductcontext } from "@/context/Productcontext/Productstate";
import { usemaincontext } from "@/context/maincontext/Mainstate";
import { useRouter } from "next/navigation";
import {  useCallback, useEffect, useMemo, useState } from 'react';

const page = ({params}) => {  
  const {addtocart}= usemaincontext()
  const {checkpincode,pincodestatus, fetchthepincodes,handleonchange,currentpincode,fetchproduct,product, colourSizeSlug} = useproductcontext()
  const router= useRouter()

  const [size, setsize]= useState(product?.size)
  const [colour, setcolour]= useState(product?.colour)
  
  useEffect(()=>{
    fetchproduct(params.slug)
    fetchthepincodes()
  },[])
  
  

  const refreshvariant=(newsize, newcolor)=>{
    // problem -> new colour and newsize not comming from new fetched product
    let url;
    url =`http://localhost:3000/product/${colourSizeSlug[newcolor?newcolor:product.colour][newsize?newsize:product.size]["slug"]}`
    // url =`http://localhost:3000/product/${colourSizeSlug[newcolor][newsize]["slug"]}`


    if(url){

      router.push(url)
    }

  }
  useCallback(()=>{
    console.log(product)
  },[product])

  return (

    <div>
      <section className="text-gray-600 body-font overflow-hidden h-[100vh]">
      {product && <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 mt-10 md:mt-0 object-cover object-top rounded" src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Codespecs</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{product.colour})</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
        </div>
        <p className="leading-relaxed">{product.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            {colour!={} && <span className="mr-3">Color</span>}
            
            {product && Object.keys(colourSizeSlug).includes("red") && <button onClick={()=>{refreshvariant(size, "red")}} className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
            {product && Object.keys(colourSizeSlug).includes("blue") && <button onClick={()=>{refreshvariant(size, "blue")}} className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
            {product && Object.keys(colourSizeSlug).includes("green") && <button onClick={()=>{refreshvariant(size, "green")}} className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
               
            
          </div>
          <div className="flex ml-6 items-center ">
            <span className="mr-3">Size</span>
            <div className="relative z-0">
              <select onChange={(e)=>{refreshvariant(e.target.value,colour)}} className="cursor-pointer rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10">
                 {product && colour && colourSizeSlug[colour] && Object.keys(colourSizeSlug[colour]).includes("S") && <option>S</option>}
                 {product && colour && colourSizeSlug[colour] && Object.keys(colourSizeSlug[colour]).includes("M") && <option>M</option>}
                 {product && colour && colourSizeSlug[colour] && Object.keys(colourSizeSlug[colour]).includes("L") && <option>L</option>}
                 {product && colour && colourSizeSlug[colour] && Object.keys(colourSizeSlug[colour]).includes("XL") && <option>XL</option>}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex">
         
          <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
          <button className="flex ml-14 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded" onClick={()=>{addtocart(params.slug,1,product.price,product.title,size,colour)}}>Add to Cart</button>
        </div>
          
        <div className="pin mt-6 flex ">
          <div className="flex flex-col">

        <input type="text" className="w-2/3 md:w-40 border border-gray-400" placeholder="Enter Your Pincode" value={currentpincode} onChange={handleonchange}/>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{pincodestatus}</h2>
        
          </div>
          <button className="flex ml-14 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded" onClick={checkpincode}>Check </button>
        </div>
      </div>
    </div>
  </div>}
  {!product && <div className="flex items-center justify-center h-full w-full">Loading... please wait</div>}
</section>
    </div>
  )
}
  
export default page
