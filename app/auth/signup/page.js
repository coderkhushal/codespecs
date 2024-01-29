"use client"

import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify'
import Button from '../components/Button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import AuthInput from '../components/AuthInput'

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit= async(data)=>{
    console.log(data)
    const res= await fetch("http://localhost:3000/api/signup",{
      method:"POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const responseData= await res.json()
   if(responseData.success==true){
    toast.success("Signed Up Successfully")
   }
  }
  return (
    <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

    <div class="lg:w-2/6 md:w-1/2 -z-0 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <Link href="/auth/login">
      <h2 class=" text-xs cursor-pointer font-medium title-font mb-5 text-orange-500">Login</h2>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>

        <AuthInput type="name" register={register} id="name" label="Name" />      
        <AuthInput type="email" register={register} id="email" label="Email" />      
        <AuthInput type="password" register={register} id="password" label="Password" />      
      <button type='submit' class="text-white bg-orange-500 border-0 py-2 px-8 w-full focus:outline-none hover:bg-orange-600 rounded text-lg">Signup</button>
      </form>
      <h3 className='flex w-full my-2 justify-center'> Or Continue With </h3>
              
      <div  className='flex justify-around'>
              <Button onclick={()=>{signIn("google")}}><FaGoogle/></Button>
              <Button onclick={()=>{signIn("github")}}><FaGithub/></Button>
            </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Page
