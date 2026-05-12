'use client'


import { useEffect, useState, useRef } from "react"
type ImageMosaic = {
    images: string[], style?: 'round' | 'square', size?: 'big' | 'small'
    imageRatio?: '1/1' | '16/9'
}

export default function ImageMosaic({images, style, size, imageRatio}:ImageMosaic){

    const scroll_factor = useRef(0.0)
    const mosaic_row = useRef<HTMLElement | null>(null)

    useEffect(()=>{
     mosaic_row.current = document.querySelector('.img_mosaic_row')

     const handlescroll = () => {
       
        
        if (mosaic_row.current){
            const rect_top =  mosaic_row.current?.getBoundingClientRect().top

             
               {rect_top??
                console.log(rect_top)

                        // IF not yet visible while scrolling down
                        if (rect_top > 0 + window.innerHeight){
                            scroll_factor.current = 0
                        }
                        // IF OUTSIDE when scrolling down
                        else if (rect_top < 0 - window.innerHeight){
                            scroll_factor.current = 1
                        }
                        else{
                             console.log(1 - (rect_top / window.innerHeight))
                            scroll_factor.current =  1 - (rect_top / window.innerHeight)
                            
                
                   }

                        
               document.documentElement.style.setProperty(
                                                    '--mosaic-scroll-factor',
                                                    String(scroll_factor.current)
                                                    )

         }
        }
      

     }
     document.addEventListener('scroll', handlescroll)
     handlescroll()

     return () => document.removeEventListener('scroll', handlescroll)
    },[])


    return(
        <>
        <div className="img_mosaic_row ms-3 me-3" 
                        >
             {images && images.map((i, idx) => {
                return (
                     
                    <div key={idx} className={   idx == 0 ? `
                                                            round_img_container_smaller`:
                                                 idx == 1 ? `
                                                             round_img_container_big`:
                                                 idx == 2 ? 
                                                            `
                                                            round_img_container_med`:
                                                 
                                                           
                                               
                                                'col-lg-2 col-6 p-0 round_img_container'}

                                   style={{borderRadius: style == 'round'? '50%' : '1%',
                                           aspectRatio: imageRatio? imageRatio : '1/1',
                                           border:  '2px solid black',
                                           position: "absolute",
                                           transition: 'transform 2s',
                                           overflow: 'hidden'
                                   }}>
                       
                        <img src={i} className={ idx == 0 ? 'slightly_displaced':
                                                (idx + 1 ) % 3 == 0? 'even_more_displaced':
                                                (idx + 1 ) % 4 == 0? 'more_displaced':
                                                'slightly_displaced'
                        }/>
                    </div>
                
                )
             })}
        </div>
        
        </>
    )
}