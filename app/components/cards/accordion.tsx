'use client'

import { useState, useRef, useEffect } from "react"
import React from "react"

type Acc = {
    sections : {title: string, content: string}[], color?: string, bgColor?: string,
     bgColorTab?: string , colorTab?: string, height: number
}

export default function Accordion({sections, color , colorTab, bgColor, bgColorTab, height}:Acc){

    const [active, setActive] = useState(0)

    useEffect(()=> {

         (() => {
              const acc_texts = document.querySelectorAll<HTMLElement>('.text_acc') 
              const inners = document.querySelectorAll<HTMLElement>('.text_acc_inner')

              const arr = Array.from(acc_texts)
              const el= arr[0]

              const width = window.getComputedStyle(el).width
              console.log(width)

              inners.forEach(c => {
            
                c.style.minWidth = width
            })

          })()

       
       
    },[])

    return (
        <div className="row p-0 m-0 acc_cont d-flex justify-content-center">

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


                        <div className={idx == active ? 'text_acc' 
                                                      : 'collapsed_acc_text text_acc'} 

                             style={{backgroundColor: bgColor? bgColor : 'white',
                                color : color? color : 'black'
                             }}>
                            <div className={`${idx !== active? 'slid_out_text': ''} text_acc_inner`}>
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