
"use client"


import {  useState } from 'react'
import Maincontext from './Maincontext'

const Mainstate=(props)=>{
  const [cart, setcart]= useState({})
  const [subtotal, setsubtotal]= useState(0)

  const savecart=(newcart)=>{
    localStorage.setItem("cart",JSON.stringify(newcart))
    let subt= 0;
    let keys= Object.keys(cart);
    for(let i= 0;i<keys.length;i++){
      subt+= newcart[keys[i]].qty * newcart[keys[i]].price
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
      setcart(newcart)
      savecart(newcart)
    }
  const removefromcart=(itemcode,qty)=>{

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
    }
    return(
        <Maincontext.Provider value={{cart,setcart, addtocart ,removefromcart,clearcart}}>
            {props.children}
        </Maincontext.Provider>
    )
}
export default Mainstate