

// import Product from "@/app/api/models/Product"
import connectdb from "../middleware/mongoose"
import Product from "../../../models/Product"
import { NextResponse } from "next/server";

export async function POST(req){

    await connectdb()
    try{

        let body  = await req.json();
        
        for(let i =0;i<body.length;i++){
            
        let prod= new Product({
            title:body[i].title,
            slug:body[i].slug,
            desc:body[i].desc,
            img:body[i].img,
            category:body[i].category,
            size:body[i].size,
            price:body[i].price,
            colour:body[i].colour,
            availableQty:body[i].availableQty,
    })
    await prod.save()
}
return new NextResponse.json({"success":true})
}
catch(err){
    console.log(err)
    return new NextResponse.json({"success":false})
}


}