export const getVariants=async(slug)=>{
    let response= await fetch("http://localhost:3000/api/getproduct",{
      method:"POST",
      body:JSON.stringify(slug)
    })
    let p= await response.json()
    return p.variants
}