import Link from "next/link"
const host = process.env.HOST

const Page = async () => {
  let product= {}
  if(host){

    let response = await fetch(host+"/api/getproducts", {
      method: "POST",
      body: JSON.stringify("case")
    })
    product = await response.json()
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <h1 className="sm:text-3xl text-2xl title-font my-3 font-bold text-gray-900 text-center">Spectacles Case</h1>
          {product && 
        Object.keys(product).map((e)=>
        <div key={e._id} className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 hover:shadow-lg">
      <Link href={`/product/${product[e].slug}`} className="block  rounded">
          <div>

          <img alt="ecommerce" className=" w-full h-full block" src={product[e].img}/>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">4.5 rating</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product[e].title}</h2>
          <p className="mt-1">{product[e].size.map(size => (`${size}  `))}</p>
          <p className="mt-1"><b>₹{product[e].price}</b></p>
          
          </div>
        </div>
        </Link></div>)}
        </div>
      </section>
    </div>
  )
}

export default Page
