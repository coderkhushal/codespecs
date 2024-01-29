import { NextResponse } from "next/server"
import connectdb from "../middleware/mongoose"
import User from "@/models/User"
const bcrypt = require('bcryptjs');
const jwt= require("jsonwebtoken")
const Secret= process.env.SECRET
export async function POST(req) {
try{
    await connectdb()
    let b = await req.json()
    let { username, email, password } = b
    const token= jwt.sign({user:{
        username, email, password
    }},Secret)
    
    
    let salt = bcrypt.genSaltSync(10);
    
    let hash = bcrypt.hashSync(password, salt);
    await User.create({
        username:username, email:email, password:hash
    })

    return NextResponse.json({ "success": true ,token:token},{
        headers:{
            "Set-Cookie":`token=${token}`
        }
    })
} catch(err){
    console.log("Signup error : ",err)
    return NextResponse.json({"success":false})
}

}