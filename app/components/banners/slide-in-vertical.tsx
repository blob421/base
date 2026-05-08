
"use client"

import type { VertSlideBanner } from "../0_required_base/types"

import {useEffect, useState, useRef} from "react"

export default function Slide_in_banner({text, image, bgColor, color, persistence, fontSize

}:VertSlideBanner){

  const [slide, setSlide] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const timeout_banner = persistence == 'long' ? 7000 : 1500

  
  const handleScroll = () => {
  const target = document.getElementById('sliding_banner')?.previousElementSibling?.getBoundingClientRect()

  if (target){
       // Current scroll relative to the center e.g. 0 + mid screen
            const current_scroll = window.scrollY 

            // Center of element relative to visible area 
            const elementCenter = target.top + window.scrollY + target.height / 2
            const distance = Math.abs(elementCenter - current_scroll)
            const distance_percent = (distance / document.body.scrollHeight) * 100
   
 
    if (distance_percent < 20){
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      setSlide(true)
    }
    else{
      if (timeoutRef.current === null) {
     timeoutRef.current = window.setTimeout(()=>{
         setSlide(false)
         
      },timeout_banner)}
     
      
    }
 }

    
  }

  useEffect(()=> {
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
 }, [])


  return(

       <div 
       className={slide ?`sliding_banner_main slide_visible ${fontSize? fontSize: 'txt_lg'}` 
                        :`sliding_banner_main ${fontSize? fontSize: 'txt_lg'}`}
       id="sliding_banner" 
       style={{backgroundColor: bgColor? bgColor: 'white'}}>
        
          <div className="sliding_banner_text" style={{color: color? color: 'black'}}>
            {text}
            {image && <img src={image} className="img_slide_banner"/>}
          </div>
          
            
    
       </div>

  )
}