

// import Product from "@/app/api/models/Product"
import connectdb from "../middleware/mongoose"
import Product from "../../../models/Product"
import { NextResponse } from "next/server";



export async function POST(req){
    //this api gives all the colours and sizes available , this is made for products page not prduct page
    await connectdb()
    let body =await  req.json();
    let product= await Product.find({category:body})
    let uniqueproducts={}
    for(let item of product){
        if(item.title in uniqueproducts){
            //bug in below line -> for cleaning solution , size must be compared not colour
            if(!uniqueproducts[item.title].colour.includes(item.colour) && (item.availableQty>0)){
                uniqueproducts[item.title].colour.push(item.colour)
                uniqueproducts[item.title].size.push(item.size)
                uniqueproducts[item.title].variant.push(item.variant)
            }
            
        }
        else{
            uniqueproducts[item.title] = JSON.parse(JSON.stringify(item))
            
            if(item.availableQty>0){
                
                uniqueproducts[item.title].colour=[item.colour]
                uniqueproducts[item.title].size=[item.size]
                uniqueproducts[item.title].variant=[item.variant]
            }
        }
    }
    return new Response(JSON.stringify(uniqueproducts))


}
