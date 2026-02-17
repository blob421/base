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
         const screen_center = window.innerHeight / 2
         const rect_center = rect.top + rect.height / 2
         const difference = Math.abs(rect_center - screen_center)
         const diff_percent = (difference / window.innerHeight) * 100
         if (diff_percent < 45){
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
        <div className={height == 'small' ? "row banner_medium txt_lg text-center mb-3 mt-3":
            height == 'medium' ? "row banner_medium txt_lg text-center mb-3 mt-3":
            height == 'large' ? "row banner_medium txt_lg text-center mb-3 mt-3"
            :"row banner_medium txt_lg text-center mb-3 mt-3"}
         
          id="sliding_banner_row">
            <div className={slide && direction == 'right' ? "banner_sliding_active_right banner_sliding_inner_right":
                           !slide && direction == 'right' ?  "banner_sliding_inner_right":
                           slide && direction == 'left' ? "banner_sliding_active_left banner_sliding_inner_left":
                           "banner_sliding_inner_left"
                        } style={{paddingTop:height == 'small' ? '1rem':
                                             height == 'medium' ? '1.5rem':
                                            height == 'large' ? '3rem':
                                            '1.5rem' , 
                                 paddingBottom: height == 'small' ? '1rem':
                                                height == 'medium' ? '1.5rem':
                                                height == 'large' ? '3rem':
                                                '1.5rem',
                                 color: color? color: "black", backgroundColor: bgColor? bgColor: "white",
                        }}>
                  {text}
            </div>
              
        </div>
        
    )
}