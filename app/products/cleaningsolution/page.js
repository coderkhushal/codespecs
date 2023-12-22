import Link from "next/link"


const page = async () => {
  let productresp = await fetch("http://localhost:3000/api/getproducts", {
    method: "POST",
    body: JSON.stringify("cleaningsolution"),
    cache: "no-store"
  })
  let product = await productresp.json()

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h1 className="sm:text-3xl text-2xl title-font my-3 font-bold text-gray-900 text-center">Cleaning Solution</h1>
        <div className="flex  flex-wrap min-w-full">
            {product &&
              product.map((e) =>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 hover:shadow-lg">
                  <Link href={`/product/${e.slug}`} className="block  rounded">
                    <div>

                      <img alt="ecommerce" className=" w-full h-full block" src={e.img} />
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">4.5 rating</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{e.title}</h2>
                        <p className="mt-1">{e.size}</p>
                        <p className="mt-1"><b>₹{e.price}</b></p>

                      </div>
                    </div>
                  </Link></div>)}
          </div>
       
      </div>
    </section>
  )
}

export default page
