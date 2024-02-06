"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {signIn, useSession} from "next-auth/react"
import Button from '../components/Button'
import AuthInput from '../components/AuthInput'

const Page = () => {
  const session= useSession()
  const router= useRouter()
  
  useEffect(()=>{
    if(session?.status=="authenticated"){
      console.log("hello")
      router.push("/")
    }
    },[session.status])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleAuth= (provider)=>{
    signIn(provider,{redirect:false}).then((callback)=>{
      if(callback?.error){toast.error("Invalid Credentials")}
      else if(callback?.ok){toast.success("LoggedIn Successfully"); router.push("/"); console.log("hello")}
    })
  }
  const onSubmit=async (data)=>{
      signIn("credentials",{...data, redirect:false}).then((callback)=>{
        if(callback?.error){
          toast.error("Invalid Credentials")

        }
        else if(callback?.ok){
          toast.success("LoggedIn Successfully")
          router.push("/")
          console.log("heelo")
        }
      })
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <Link href="/auth/signup">
              <h2 className=" text-xs cursor-pointer font-medium title-font mb-5 text-orange-500">Signup</h2>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput type="email" register={register} id="email" label="Email" />      
        <AuthInput type="password" register={register} id="password" label="Password" />     
              <Link href="/auth/forgetpass">
                <p className='text-orange-500 ml-auto my-2 cursor-pointer'>fogot password</p>
              </Link>
              <button type="submit" className="w-full text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Login</button>
              <h3 className='flex w-full my-2 justify-center'> Or Continue With </h3>
              
            </form>
            <div  className='flex justify-around'>
              <Button onclick={()=>{handleAuth("google")}}><FaGoogle/></Button>
              <Button onclick={()=>handleAuth("github")}><FaGithub/></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
