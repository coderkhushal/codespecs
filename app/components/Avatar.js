
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { CgProfile } from "react-icons/cg";

const Avatar = () => {
  const session = useSession()
  const [showUserInfo, setshowUserInfo]= useState(false)

  useEffect(() => {
    if (session) {
      localStorage.setItem("user", JSON.stringify(session?.data?.user))
    }
  }, [session])

  return (

      
    <div className='relative' onMouseOver={()=>setshowUserInfo(true)} onMouseOut={()=>setshowUserInfo(false)}>
      {(session?.data?.user?.image ?
        <div><Image className='rounded-full' src={session?.data?.user?.image} alt="userimage" width={30} height={30} /></div> 
        :<div><CgProfile /></div>)}
        {showUserInfo && <div className='absolute top-5 right-0 w-[10rem] flex flex-col rounded-3xl text-lg  bg-orange-400'>
          <Link href="/myaccount" >
          <div className='py-2  hover:text-gray-900 hover:font-semibold'>My Account</div>
          </Link>
          <Link href="/orders">
          <div className='py-2  hover:text-gray-900 hover:font-semibold'>Orders</div>
          </Link>
          
          <div className='py-2  hover:text-gray-900 hover:font-semibold' onClick={()=>signOut()}>Logout</div>
          
        </div>}
    </div>
  )
}

export default Avatar