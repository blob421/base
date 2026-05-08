"use client"

import type { BannerProps } from "../0_required_base/types"
import {useState, useEffect} from "react"

type SlidingBannerProps = BannerProps & {
    direction? : "left" | "right"
}
export default function Slide_in_banner_row({text, height, bgColor, color, fontSize,
    direction}:SlidingBannerProps){
    
    direction = direction ? direction : 'right'

    const [slide, setSlide] = useState(false)
    const handleScroll = () => {
       
      
       const rect = document.getElementById('sliding_banner_row')?.getBoundingClientRect()
       if (rect){
            // Current scroll relative to the center e.g. 0 + mid screen
            const current_scroll = window.scrollY 

            // Center of element relative to visible area 
            const elementCenter = rect.top + window.scrollY + rect.height / 2
            const distance = Math.abs(elementCenter - current_scroll)
            const distance_percent = (distance / document.body.scrollHeight) * 100
       
          
           
            if (distance_percent < 20){
             setSlide(true)
         }
           else{
            setSlide(false)
        }

     }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => removeEventListener('scroll', handleScroll)
    }, [])

     return (
        <div id="sliding_banner_row" className={
            height == 'small' ? `row banner_medium ${fontSize? fontSize: 'txt_lg'} 
                                 text-center mb-3 mt-3`:
            height == 'medium' ? `row banner_medium ${fontSize? fontSize: 'txt_lg'} 
                                  text-center mb-3 mt-3`:
            height == 'large' ? `row banner_medium ${fontSize? fontSize: 'txt_lg'} 
                                  text-center mb-3 mt-3`

                              :`row banner_medium ${fontSize? fontSize: 'txt_lg'} 
                                text-center mb-3 mt-3`}
           >


            <div className={slide && direction == 'right' ? "banner_sliding_active_right banner_sliding_inner_right":
                           !slide && direction == 'right' ?  "banner_sliding_inner_right":
                           slide && direction == 'left' ? "banner_sliding_active_left banner_sliding_inner_left":
                           "banner_sliding_inner_left"} 
                style={{paddingTop: height == 'small' ? '1rem':
                                    height == 'medium' ? '1.5rem':
                                    height == 'large' ? '3rem'
                                                      : '1.5rem' , 

                        paddingBottom:  height == 'small' ? '1rem':
                                        height == 'medium' ? '1.5rem':
                                        height == 'large' ? '3rem'
                                                          :'1.5rem',
                        color: color? color: "black", 
                        backgroundColor: bgColor? bgColor: "white",
                        
                        
                        }}>
                  {text}
            </div>
              
        </div>
        
    )
}