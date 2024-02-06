
import { NextResponse } from "next/server"

import connectdb from "../../middleware/mongoose"
import Product from "@/models/Product"

export async function POST(req){
    try{
        await connectdb()
        let body= await req.json()
        let p= await Product.findOne({slug:body})
        let variants=await Product.find({title:p.title})
        return NextResponse.json({product:p, variants:variants})
    }catch(err){
        console.log(err)
        return new NextResponse.json({error:err})
    }
  
}
