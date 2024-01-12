import { NextResponse } from "next/server"
import connectdb from "../middleware/mongoose"
import User from "@/models/User"
var bcrypt = require('bcryptjs');

export async function POST(req){
    await connectdb()
    let b = await req.json()
    let {email , password}= b
    console.log(email, password)
    let user=await  User.find({email:email})
    console.log(user.password)
    // let hash =  user.password
    // let isPasswordCorrect = bcrypt.compareSync(password, hash); 
    // console.log(isPasswordCorrect)

    return  NextResponse.json({"success":"true"})

}