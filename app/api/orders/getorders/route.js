import { NextResponse } from "next/server"
import connectdb from "../../middleware/mongoose"
import Order from "@/models/Order"

export async function GET(){
    
    try{
        await connectdb()
        let orders= await Order.find()        
        return NextResponse.json(orders)
    }
    catch(err){
        console.log(err)
        return new NextResponse.json({error:err})
    }
}