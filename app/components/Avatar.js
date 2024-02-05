
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Avatar = () => {
    const session = useSession()
    useEffect(()=>{
      if(session){
        localStorage.setItem("user",JSON.stringify(session?.data?.user))
      }
    },[session])
    
  return (


    <div  >
{(session?.status=="unauthenticated" || !session?.data?.user?.image)?<div className='bg-orange-500 rounded-full px-2 border-gray-400'>Login</div>:<div><Image className='rounded-full' src={session?.data?.user?.image} alt="userimage" width={30} height={30}/></div>}
    </div>
  )
}

export default Avatar