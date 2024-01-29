import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import connectdb from "../../middleware/mongoose";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User";
const bcrypt= require("bcryptjs")
const handler= NextAuth({
  providers:[
    Github({
      clientId:process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET
    }),
    Google({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name:"credentials",
      credentials:{
        email:{label:"email", type:"text"},
        password:{label:"password",type:"password"}
      },
      async authorize(credentials){
        await connectdb()
        if(!credentials?.email || !credentials?.password){
          throw new Error("Invalid Credentials")
        }
        let user=await User.findOne({email:credentials?.email})
        
        if(!user || !user?.password){
          throw new Error("Invalid Credentials")
        }
        const isPasswordCorrect= bcrypt.compare(credentials.password, user.password)
        
        
        if(!isPasswordCorrect){
          throw new Error("Invalid Credentails")
        }
        return user
      }
    })
  ],
  session:{
    strategy:"jwt"
  },
  secret:process.env.SECRET
})

export {handler as GET, handler as POST};