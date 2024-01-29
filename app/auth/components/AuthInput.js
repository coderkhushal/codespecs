import React from 'react'

const AuthInput = (props) => {
    let {register, label, type, id}= props
  return (
    <div>
        <label htmlFor={id} className="leading-7 text-sm text-gray-600 ">{label}</label>
        <input type={type} {...register(id)} id={id} name={id} className="w-full  bg-white mb-4 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

    </div>
  )
}

export default AuthInput