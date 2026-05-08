"use client"
import {useEffect , useState} from "react"

import type { BannerProps } from "../0_required_base/types"


export default function GrowingBanner({text, height, bgColor, color, fontSize, shape}:BannerProps){

    const [textScale , setTextScale] = useState(1.0)

    useEffect(()=>{
       const handleScroll = () => {
          
        
       const banner_rect = document.getElementById('growing_banner')?.getBoundingClientRect()

       if (banner_rect){

            // Current scroll relative to the center e.g. 0 + mid screen
            const current_scroll = window.scrollY 

            // Center of element relative to visible area 
            const elementCenter = banner_rect.top + window.scrollY + banner_rect.height / 2
            const distance = Math.abs(elementCenter - current_scroll)
            const distance_percent = (distance / document.body.scrollHeight) * 100
       
          
           
            if (distance_percent >= 25){
        
             setTextScale(1.0)
            }
            else if (distance_percent >= 15){
                setTextScale(1.2)
            }
            else {
             setTextScale(1.3)
            }
       }
       }
       window.addEventListener("scroll", handleScroll) 
       handleScroll()
      
      return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    return (
        <div id="growing_banner" className={
            
              height == 'small' ? 
                "row d-flex justify-content-center  pb-3 pt-3 scaled_banner w-100 m-0 mb-5 mt-5" 

            : height == 'medium' ? 
                "row d-flex  justify-content-center pb-4 pt-4 scaled_banner w-100 m-0 mb-5 mt-5"

            : height == 'large' ? 
                "row d-flex justify-content-center pb-5 pt-5 scaled_banner w-100 m-0 mb-5 mt-5"
            :
                "row d-flex justify-content-center pb-4 pt-4 scaled_banner w-100 m-0 mb-5 mt-5"} 

           
                style={{ backgroundColor: bgColor ? bgColor: 'white', 
                         borderRadius: shape == "round" ? "11px": "0px" ,
                         width: shape == 'round' ? '98%': '100vw',
                         color: color? color: 'black'}}>
       

         
              <div className={fontSize == 'txt_lg' ? "growing_text_content txt_lg":
                              fontSize == 'txt_xl' ? "growing_text_content txt_xl":
                              fontSize == 'txt_sm' ? "growing_text_content txt_sm":
                              fontSize == 'txt_md' ? "growing_text_content txt_md":
                                                      "growing_text_content txt_lg"} 
                   style={{transform: `scale(${textScale})`,
                           maxWidth: textScale == 1.2 ? '70%': '90%'}}>
                {text}
              </div>
        
            
        </div>
    )
}