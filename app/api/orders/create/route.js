import { NextResponse } from "next/server"
import connectdb from "../../middleware/mongoose"
import Order from "../../../../models/Order"
export async function POST(request){
    try{
        await connectdb()
        const body = await request.json()
        let {userId, products, address, amount}=body
        let order = new Order({
            userId, products, address, amount
        })
        await order.save()

        return new NextResponse(JSON.stringify(order))
    }
    catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({error:err,"success":false}))
    }
}