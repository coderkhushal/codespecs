"use client"
import { useContext,  useState } from "react";

const { Productcontext } = require("./Productcontext");

const Productstate= (props)=>{
    
  const[pincodes, setpincodes] =useState([])
  const[currentpincode, setcurrentpincode] = useState()
  const[pincodestatus,setpincodestatus] = useState("")
  const [product, setproduct]= useState()
  const [colourSizeSlug,setcolourSizeSlug] = useState()
  
  
  const handleonchange=(e)=>{
    
    setcurrentpincode(e.target.value)
  }
  const checkpincode=()=>{
    if(pincodes.includes(Number.parseInt(currentpincode))){
      setpincodestatus("Available")
      
    } 
    else{
      setpincodestatus("Unavailable")
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


  //fetching this product
  let fetchproduct=async(slug)=>{
    let response= await fetch("http://localhost:3000/api/getproduct",{
      method:"POST",
      body:JSON.stringify(slug)
    })
    let p= await response.json()
    setproduct(p.product)
    
    fetchvariants(p.variants)
  }

  //variants functionality
  let fetchvariants=async(variants)=>{
    
    let colourSizeSlugtemp ={} // demo: {red : {xl :{slug: "see-the-code"}}}
    for(let item of variants){
      if(Object.keys(colourSizeSlugtemp).includes(item.colour)){
        colourSizeSlugtemp[item.colour][item.size] = {slug: item.slug}
      }
      else{
        colourSizeSlugtemp[item.colour]={}
        colourSizeSlugtemp[item.colour][item.size] = {slug: item.slug}
      }
    } 
    setcolourSizeSlug(colourSizeSlugtemp)
    
    
  }
    const fetchthepincodes=()=>{fetchpincode()}
    return (
        <Productcontext.Provider value={{handleonchange,fetchthepincodes,currentpincode,  fetchproduct, colourSizeSlug, checkpincode, product, pincodestatus}}>
            {props.children}
        </Productcontext.Provider>
    )
}
export default Productstate

export const useproductcontext= ()=> useContext(Productcontext)