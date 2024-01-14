import { getVariants } from "./getVariants"

export const getColourSizeSlug= async(slug)=>{
    let variants= await getVariants(slug)
    
    let colourSizeSlug ={} // demo: {red : {xl :{slug: "see-the-code"}}}
    for(let item of variants){
      if(Object.keys(colourSizeSlug).includes(item.colour)){
        colourSizeSlug[item.colour][item.size] = {slug: item.slug}
      }
      else{
        colourSizeSlug[item.colour]={}
        colourSizeSlug[item.colour][item.size] = {slug: item.slug}
      }
    } 
    return colourSizeSlug
}