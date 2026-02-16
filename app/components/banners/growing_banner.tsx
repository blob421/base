"use client"
import {useEffect , useState} from "react"

import type { BannerProps } from "../0_required_base/types"


export default function GrowingBanner({text, height, bgColor, color, fontSize, shape}:BannerProps){

    const [textScale , setTextScale] = useState(1.0)

    useEffect(()=>{
       const handleScroll = () => {
          
        
       const banner_rect = document.getElementById('growing_banner')?.getBoundingClientRect()
       if (banner_rect){
            const elementCenter  = banner_rect.top + banner_rect.height / 2
            const scrollheight = window.innerHeight / 2
    
         
            const distance = Math.abs(elementCenter - scrollheight)
            const distance_percent = distance / scrollheight * 100
           
            if (distance_percent >= 85 || distance >= 500){
        
             setTextScale(1.0)
            }
            else {
             setTextScale(1.2)
            }
       }
       }
       window.addEventListener("scroll", handleScroll) 
       handleScroll()
      
      return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    return (
        <div className={
            
height == 'small' ? "row d-flex justify-content-center  pb-3 pt-3 mb-5 mt-5 scaled_banner" :
height == 'medium' ? "row d-flex  justify-content-center pb-4 pt-4 mb-5 mt-5 scaled_banner":
height == 'large' ? "row d-flex justify-content-center pb-5 pt-5 mb-5 mt-5 scaled_banner"
                   :"row d-flex justify-content-center pb-4 pt-4 mb-5 mt-5 scaled_banner"} 
        id="growing_banner"
        style={{ backgroundColor: bgColor ? bgColor: 'white', borderRadius: shape == "round" ? 
                                                                             "11px": "0px" ,
                 width: shape == 'round' ? '98%': '100%',
        color: color? color: 'black'}}>
       

         
              <div className={fontSize == 'large' ? "growing_text_content txt_lg":
                              fontSize == 'larger' ? "growing_text_content txt_xl":
                              fontSize == 'small' ? "growing_text_content txt_sm":
                              fontSize == 'medium' ? "growing_text_content txt_md":
                                                      "growing_text_content txt_md"
              } style={{transform: `scale(${textScale})`,
            maxWidth: textScale == 1.2 ? '70%': '90%'}}>
                   {text}
              </div>
        
            
        </div>
    )
}