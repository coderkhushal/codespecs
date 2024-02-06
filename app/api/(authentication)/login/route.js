import { NextResponse } from "next/server"
import connectdb from "../../middleware/mongoose"
import User from "@/models/User"
const bcrypt = require('bcryptjs');
const jwt= require("jsonwebtoken")
const Secret= process.env.SECRET

export async function POST(req){
    try{

        await connectdb()
        let b = await req.json()
        let token = req.cookies.get("token")

        let {email , password}= b

        let user=await User.findOne({email:email})
    
    let hash =  user.password
    let isPasswordCorrect = bcrypt.compareSync(password, hash); 
    // let userDetails=  jwt.verify(token,Secret)
    
    if(isPasswordCorrect){
        return  NextResponse.json({"success":true,loggedin:true })
    }
    else{
        return NextResponse.json({"success":true, loggedin:false})
    }
}
catch(err){
    console.log("LOGGED IN ERROR ", err)
    return NextResponse.json({"success":false,loggedin:false,message:"Internal Server Error"})
}

}