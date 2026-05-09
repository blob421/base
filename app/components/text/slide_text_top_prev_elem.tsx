'use client'

import { useEffect, useState, useRef } from "react"

type SlideInText = {
    fontSize?: "txt_xl" | "txt_lg" | "txt_md" | 'txt_sm', style?: string | 'TimesNewRoman' | 'calibri', 
    color?: string , text: string}


export default function SlideInText({text, fontSize, style, color}:SlideInText){

    const [slide, setSlide] = useState(false)
 
    const target_sibling = useRef<HTMLElement | null>(null)
    const timeout_ref = useRef<number | null>(null)

    useEffect(()=>{

        
        const this_element = document.getElementById('slide_in_text') as HTMLElement
        if (this_element){
            const sibling = this_element.previousElementSibling as HTMLElement

            target_sibling.current = sibling
            const sibling_position = sibling?.getBoundingClientRect()

             if (sibling_position){
         
                 // From document.top        Only in window
                 this_element.style.top = `${sibling_position.top + window.scrollY}px`
                 }
       }
     
    

        const handleScroll = () => {
           if (!target_sibling.current) return 

           const margin = window.innerHeight / 3
           const sibling_position =  target_sibling.current.getBoundingClientRect().top

           if (sibling_position < (window.innerHeight /2 ) + margin 
                        && sibling_position > ( window.innerHeight /2) - margin){

               setSlide(true)
               if (timeout_ref.current){
                   window.clearTimeout(timeout_ref.current)
                   timeout_ref.current = null
               }
       

            }else {
                if (!timeout_ref.current)
                timeout_ref.current = window.setTimeout(()=> setSlide(false), 4000)
               
            }
           
    


        }
        document.addEventListener('scroll', handleScroll)

        return () => {document.removeEventListener('scroll', handleScroll) ;
                       if (timeout_ref.current)
            
                         window.clearTimeout(timeout_ref.current)}

    }, [])



    return (
        <div id='slide_in_text' className={slide ? ` mt-3 position-absolute hidden_slide_in slide_in_text 
                                                    ${fontSize? fontSize : 'txt_lg'}` 
                                                    
                                                 : `mt-3 position-absolute hidden_slide_in 
                                                   ${fontSize? fontSize : 'txt_lg'}`}

            style={{color: color ? color: 'black',
                    fontFamily: style? style: 'calibri',
                   
            }}>

            
            {text}
        </div>
    )
}