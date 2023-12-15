import React from 'react'

const page = ({params}) => {
  return (
    <div>
      this is the page for single product  having product id {params.slug}
    </div>
  )
}

export default page
