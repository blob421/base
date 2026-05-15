'use client'

import { useState, useLayoutEffect} from "react"
import React from "react"

type Acc = {
    sections : {title: string, content: string}[], color?: string, bgColor?: string,
     bgColorTab?: string , colorTab?: string, height: number
}

export default function Accordion({sections, color , colorTab, bgColor, bgColorTab, height}:Acc){

    const [active, setActive] = useState(0)
  

   


    useLayoutEffect(()=> {
          const set_acc_size = () => {
  
              const acc_text = document.querySelector<HTMLElement>('.not_collapsed_hor_acc_text') 
              const inners = document.querySelectorAll<HTMLElement>('.text_acc_inner')
        
         
              let targetWidth 
              if (acc_text){ 
                 targetWidth =  window.getComputedStyle(acc_text).width
            }
             
              
            
              if (targetWidth) {
                    inners.forEach(c => {
                    
                        c.style.minWidth = targetWidth
                    })

              }

    }
          set_acc_size()
 
      

          window.addEventListener('resize', set_acc_size)
        
          return () => window.removeEventListener('resize', set_acc_size)

         

       
       
    },[])




    return (
        <div className="row p-0 acc_cont d-flex justify-content-center">

            <div className="d-flex col-11 col-md-6 acc_col justify-content-start p-0" style={{height: height? `${height}vh`: '40vh'}}>

               {sections.map((s, idx)=> {
        
                return (

                  <React.Fragment key={idx}>

                        <div className="acc_unit_head txt_md" onClick={()=> setActive(idx)} 
                        style={{color: colorTab? colorTab: 'white',
                            backgroundColor: bgColorTab? bgColorTab : 'grey'
                        }}>
                            {s.title}
                        </div>


                        <div className={idx == active ? 'text_acc not_collapsed_hor_acc_text' 
                                                      : 'collapsed_acc_text text_acc'} 

                             style={{backgroundColor: bgColor? bgColor : 'white',
                                color : color? color : 'black'
                             }}>
                            <div className={`txt_md ${idx !== active? 'slid_out_text': ''} text_acc_inner`}>
                                    {s.content}
                            </div>
                            
                        </div>

                    </React.Fragment>
                )
               })}
            </div>

     

         
        </div>
    )
}