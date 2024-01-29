import React from 'react'

const Button = (props) => {
    const {onclick} = props
  return (
    <button className='w-1/3 my-2 mx-2 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg flex justify-center' onClick={onclick}>{props.children}</button>
  )
}

export default Button