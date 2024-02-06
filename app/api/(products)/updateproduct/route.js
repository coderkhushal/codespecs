import Product from "@/models/Product"

export async function POST(req){
    try{

        let body= await req.json()
        let p= await Product.findByIdAndUpdate(body._id,body)
        return new Response(JSON.stringify({"success":true}))
        
    }
    catch(err){
        console.log(err)
        return new Response(JSON.stringify({"success":false}))
    }
}