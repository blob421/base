
"use client"

type SlidingBannerProps = {
    text:string, image?: string, bgColor?:string, color?:string, persistence?: "long" | "short"
}

import {useEffect, useState, useRef} from "react"

export default function Slide_in_banner({text, image, bgColor, color, persistence}:SlidingBannerProps){

  const [slide, setSlide] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const timeout_banner = persistence == 'long' ? 7000 : 1500

  
  const handleScroll = () => {
  const target = document.getElementById('sliding_banner')?.previousElementSibling?.getBoundingClientRect()

  if (target){
    
    const target_center = target.top + target.height / 2
    const window_center = window.innerHeight / 2
    const difference = Math.abs(window_center - target_center) 
    const diff_percent = (difference / window.innerHeight) * 100
 
    if (diff_percent < 15){
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

       <div className={slide ?"sliding_banner_main slide_visible" :"sliding_banner_main"} 
       id="sliding_banner" style={{backgroundColor: bgColor? bgColor: 'white'}}>
        
          <div className="sliding_banner_text txt_lg" style={{color: color? color: 'black'}}>
            {text}
            {image && <img src={image} className="img_slide_banner"/>}
          </div>
          
            
    
       </div>

  )
}