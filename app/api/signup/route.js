import { NextResponse } from "next/server"
import connectdb from "../middleware/mongoose"
import User from "@/models/User"
var bcrypt = require('bcryptjs');

export async function POST(req) {
try{
    await connectdb()
    let b = await req.json()
    let { username, email, password } = b
    console.log(username, email, password)
    
    let salt = bcrypt.genSaltSync(10);
    
    let hash = bcrypt.hashSync(password, salt);
    await User.create({
        username:username, email:email, password:hash
    })
    return NextResponse.json({ "success": true })
} catch(err){
    console.log(err)
    return NextResponse.json({"success":false})
}

}