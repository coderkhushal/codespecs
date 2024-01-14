
"use client"


import {  useContext, useState } from 'react'
import Maincontext from './Maincontext'
import { toast } from 'react-toastify'

const Mainstate=(props)=>{
  const [cart, setcart]= useState({})
  const [subtotal, setsubtotal]= useState(0)

  const savecart=(newcart)=>{
    localStorage.setItem("cart",JSON.stringify(newcart))
    let subt= 0;
    let keys= Object.keys(newcart);
    for(let i= 0;i<keys.length;i++){

      subt += (newcart[keys[i]].qty * newcart[keys[i]].price)
    }
    setsubtotal(subt)
  }
  const addtocart=(itemcode, qty, price, name, size, variant)=>{  
      
      let newcart= cart;
      if(itemcode in cart){
        newcart[itemcode].qty += qty;
      }
      else{
        newcart[itemcode]= {qty:1, price, name, size, variant}
      }
      console.log(newcart)
      setcart(newcart)
      savecart(newcart)
      toast.success("Product Added Successfully");
    }
    const removefromcart=(itemcode,qty,price , name, size , variant)=>{
      
      let newcart= cart;
      if(itemcode in cart){
        newcart[itemcode].qty -= qty;
      }
      if(newcart[itemcode].qty<=0){
        delete newcart[itemcode]
      }
      setcart(newcart)
      savecart(newcart)
      
    }
    const clearcart=()=>{
      setcart({})
      savecart({})
      toast.success("Cart Cleared Successfully");
    }

    const buynow=(itemcode, qty, price, name, size, variant)=>{
      savecart({})
      let newcart= {};
    
      newcart[itemcode]= {qty:1, price, name, size, variant}
      console.log(newcart)
      setcart(newcart)
      savecart(newcart)

    }


    return(
        <Maincontext.Provider value={{cart,setcart, addtocart,setsubtotal ,buynow,removefromcart,clearcart,subtotal, savecart}}>
            {props.children}
        </Maincontext.Provider>
    )
}
export default Mainstate

export const usemaincontext= ()=> useContext(Maincontext)