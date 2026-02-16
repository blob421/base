"use client"
import {useEffect , useState} from "react"

type growing_banner_props = {
    text:string, height?: string, bgColor?: string, color?: string
}


export default function GrowingBanner({text, height, bgColor, color}:growing_banner_props){

    const [textScale , setTextScale] = useState(1.0)

    useEffect(()=>{
       const handleScroll = () => {
          
        
       const banner_rect = document.getElementById('growing_banner')?.getBoundingClientRect()
       if (banner_rect){
            const elementCenter  = banner_rect.top + banner_rect.height / 2
            const scrollheight = window.innerHeight / 2
    
         
            const distance = Math.abs(elementCenter - scrollheight)
            const distance_percent = distance / scrollheight * 100
           
            if (distance_percent >= 90 || distance >= 500){
        
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
        <div className={"row d-flex justify-content-center pb-5 pt-5 mb-5 mt-5 scaled_banner"} 
        id="growing_banner"
        style={{ backgroundColor: bgColor ? bgColor: 'white',
        color: color? color: 'black'}}>
       

         
              <div className="growing_text_content txt_lg" style={{transform: `scale(${textScale})`,
            maxWidth: textScale == 1.2 ? '70%': '100%'}}>
                   {text}
              </div>
        
            
        </div>
    )
}