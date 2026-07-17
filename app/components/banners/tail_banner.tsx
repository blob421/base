'use client'

import { useEffect, useState } from "react"
import addLink from "../1_utilities/addLink"

import type { BannerProps } from "@/app/components/0_required_base/types"

export default function Tail_banner_image({text, img, color, bgColor, height, fontSize,
    link
                         
}:BannerProps){
    
  

    useEffect(()=> {
         const div = document.querySelector('.tail_banner_text')
         if (link && div){
            const new_txt = addLink(link.href, link.word, text)
            div.innerHTML = new_txt
     
         }
    
 
    }, [])

    return (
        <div className={`row tail_banner text-left text-md-center ${fontSize? fontSize : 'txt_lg'} 
                         p-lg-4 p-4 pb-lg-2 pt-lg-2 pt-4 pb-4 p-xxl-5`}
              style={{color: color? color: "black", 
                        backgroundColor: bgColor? bgColor: "white",

                        minHeight: height == "small" ? "9vh"
                                : height =='medium' ? "12vh" 
                                : height == 'large' ? "15vh"
                                                    : "12vh",
                        borderTop: `2px solid ${color ?? 'black'}`
         }}>
            <div className="col-12 d-flex ps-lg-0 tail_banner_inner justify-content-center align-items-center"
           >
                <div className={height == 'small'? "tail_banner_text" 
                                                 : "tail_banner_text"}>
                {text}
                </div>
                <img src={img} className="tail_img"/>
            </div>

        </div>
    )
}