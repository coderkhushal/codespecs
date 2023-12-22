import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

    <div class="lg:w-2/6 md:w-1/2 -z-0 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <Link href="/auth/login">
      <h2 class=" text-xs cursor-pointer font-medium title-font mb-5 text-orange-500">Login</h2>
      </Link>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full  bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full  bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="text" id="full-name" name="full-name" class="w-full  bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Signup</button>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default page
