"use client"
import { getVariants } from "@/app/actions/getVariants";
import { useContext,  useState } from "react";
import { toast } from "react-toastify";

const { Productcontext } = require("./Productcontext");

const Productstate= (props)=>{
    
  const[pincodes, setpincodes] =useState([])
  const[currentpincode, setcurrentpincode] = useState()
  const[pincodestatus,setpincodestatus] = useState("")

  
  
  const handleonchange=(e)=>{
    
    setcurrentpincode(e.target.value)
  }
  const checkpincode=()=>{
    if(pincodes.includes(Number.parseInt(currentpincode))){
      setpincodestatus("Available")
      toast.success("This Pincode is Serviceable")
    } 
    else{
      setpincodestatus("Unavailable")
      toast.error("This Pincode is Serviceable")
    }
  }
  const fetchpincode=async()=>{
    let resp = await fetch("http://localhost:3000/api/pincode",{
      method:"GET",
      headers:{ "Content-Type":"application/json"}
    })
    let data= await resp.json()
    setpincodes(data)
    
  }




    const fetchthepincodes=()=>{fetchpincode()}
    return (
        <Productcontext.Provider value={{handleonchange,fetchthepincodes,currentpincode, checkpincode,  pincodestatus}}>
            {props.children}
        </Productcontext.Provider>
    )
}
export default Productstate

export const useproductcontext= ()=> useContext(Productcontext)