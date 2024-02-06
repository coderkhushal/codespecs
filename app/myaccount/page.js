"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const MyAccount = () => {
    let session= useSession()
    let router= useRouter()
    useEffect(()=>{
        if(session?.status=="unauthenticated"){
            router.push("/auth/login")
        }
    },[session.status])
  return (
    <div className='mt-5 h-[50vh] pt-10 '>MyAccount</div>
  )
}

export default MyAccount