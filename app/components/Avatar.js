import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { MdAccountCircle } from 'react-icons/md'

const Avatar = () => {
    const session = useSession()
    console.log(session)
  return (


    <div  >
{(session?.status=="unauthenticated" || !session?.data?.user?.image)?<MdAccountCircle/>:<div><Image className='rounded-full' src={session?.data?.user?.image} alt="userimage" width={30} height={30}/></div>}
    </div>
  )
}

export default Avatar