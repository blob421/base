'use client'

import { useEffect, useState, useRef } from "react"


type Canvas_props = {
    imgs_folder: string, frames_length: number, file_extension: string, file_substring: string
}


export default function Animated_Canvas({imgs_folder, frames_length, 
                                        file_extension, file_substring}:Canvas_props) {

  const [active_frame, setActiveFrame] = useState(0)
  const cache = useRef<Record<number, HTMLImageElement>>({});

  

  useEffect(()=> {
    const pixels_per_frame = (document.body.scrollHeight - window.innerHeight) / frames_length
    
  
    for (let z=0; z < frames_length; z++){
        const img = new Image()
        
        const idx = z + 1 
        const string_frame = idx < 10 ? `000${idx}`:
                             idx < 100 ? `00${idx}`:
                             idx < 1000 ? `0${idx}`: ""

        img.src = `${imgs_folder}${file_substring}${string_frame}.${file_extension}`

        cache.current[idx] = img
   
    }

    const handleScroll = () => {
        
        const index = Math.floor(window.scrollY / pixels_per_frame) + 1
        
 

        setActiveFrame(index)
     
    }


     document.addEventListener('scroll', handleScroll)
     setActiveFrame(1)
     return () => document.removeEventListener('scroll', handleScroll)

  }, [])

  useEffect(() => {
    if (active_frame == 0) return

    const canvas = document.getElementById('bg_canvas') as HTMLCanvasElement
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx){
   
            const image = cache.current[active_frame]
            if (!image) return

       
            const draw = () => {
                const imgRatio = image.width / image.height;
                const canvasRatio = canvas.width / canvas.height;

                let w 
                let h 
          

              if (imgRatio > canvasRatio) {
                    // image is wider → fit by height, crop sides
                    h = canvas.height;
                    w = h * imgRatio;
              } else {
                    // image is taller → fit by width, crop top/bottom
                    w = canvas.width;
                    h = w / imgRatio;
                    }

                    const x = (canvas.width - w) / 2;
                    const y = (canvas.height - h) / 2;

                    ctx.drawImage(image, x, y, w, h);
            
            }
   
            
            if (image.complete) {
                draw(); 
            } else {
                image.onload = draw;
            }
      }
    
    }
     

  }, [active_frame])

  return (
    
        <canvas id="bg_canvas" style={{height: '100vh', width: '100vw', 
            position:'fixed', zIndex: -100, top:0}}>
        </canvas>
         
        
   

  


   
  ) 
}