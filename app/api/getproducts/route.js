

// import Product from "@/app/api/models/Product"
import connectdb from "../middleware/mongoose"
import Product from "../../../models/Product"



export async function POST(req){
    await connectdb()
    let body =await  req.json();
    let product= await Product.find({category:body})
    
    return new Response(JSON.stringify(product))


}