import React from "react"
import { useState, useLayoutEffect } from "react"

type Acc = {
    sections : {title: string, content: string}[], color?: string, bgColor?: string,
     bgColorTab?: string , colorTab?: string, height?: number
}

export default function AccordionV({sections, color , colorTab, bgColor, bgColorTab, height}:Acc){
    const [active ,setActive] = useState(0)
    
    useLayoutEffect(()=> {
     
        const handleResize = () => {

          const text_div = document.querySelector<HTMLDivElement>('.not_collapsed_vert_acc')
          const text_inners = document.querySelectorAll<HTMLDivElement>('.vert_acc_text')

          if (text_div){

                const targetHeight = window.getComputedStyle(text_div).height
                console.log(targetHeight)
                if (text_inners){
                    text_inners.forEach(d => {
                        d.style.minHeight = targetHeight
                    })
                }

          }
       
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    },[])


    return (
       <div className="row acc_vert_row d-flex justify-content-center" 
       style={{height: height? `${height}vh` : '70vh'}}>
        <div  className="col-md-5 col-10 acc_vert_col p-0">

            {sections.map((s, idx) => {

                return (
                    <React.Fragment key={idx}>

                        <div className="vert_acc_handle txt_md" onClick={()=> setActive(idx)}
                            style={{color: colorTab? colorTab: 'white',
                                    backgroundColor: bgColorTab? bgColorTab : 'grey'
                            }}>
                            {s.title}
                        </div>

                        <div className={active == idx ? "vert_acc_text_cont not_collapsed_vert_acc" 
                                                      : 'vert_acc_text_cont vert_acc_text_cont_collapsed'}>

                            <div className={`txt_md ${active !== idx ? "vert_acc_text slid_out_vert_acc_text" 
                                                                     :"vert_acc_text"}`}
                                                                     
                                 style={{color: color ? color : 'black',
                                         backgroundColor: bgColor? bgColor: 'white'
                                 }}>
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