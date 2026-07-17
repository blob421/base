'use client'

type herotxtprops = {
    callToAction: string, subHeaders: string[] , header: string, colorDelimiters: string[],
    delColor: string
}
import addColor from "../1_utilities/addColor"
import { useLayoutEffect, useState } from "react"
export default function HeroText({callToAction, subHeaders, header, colorDelimiters, delColor}:herotxtprops)

{ 

useLayoutEffect(()=>{

    const ctaDiv = document.querySelector('.text_right')
    if (colorDelimiters && ctaDiv){
        const new_txt = addColor(callToAction, colorDelimiters, delColor)
        if (new_txt)
             ctaDiv.innerHTML = new_txt
    }
    else if (ctaDiv){
         ctaDiv.innerHTML = callToAction
    }

    },[])


    return (
        <>
         <style>
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
         </style>

        <div className="row p-0 m-0 row_full_size_img_hero_txt h-100 w-100
        ps-xxl-5 pt-4 pt-lg-5 pb-0 pb-sm-4 pb-lg-0 d-flex justify-content-center ps-4 pe-5
        ps-sm-5 pe-lg-4
        justify-content-lg-start">

            <div className="col-12 col-lg-6 p-2 p-sm-3 pt-sm-5 p-lg-2 pt-lg-0 pb-lg-0 
             hero_txt_full h-100 g-0">

                    <div>

                    
                        <div className="text_0 txt_xl pb-2 pb-sm-3">
                            {header}
                        </div>

                        {subHeaders.map((h, idx)=> {
                            return(
                                <div key={idx} className="txt_sm_wide">
                                    {h}
                                </div>
                            )
                        })}
                   </div>

                
              
            </div>

            < div className="col-12 col-lg-6 p-2 p-sm-3 pb-2 pb-md-5 pt-4 pt-md-5">
                 <div className="text_right txt_sm_wide" style={{lineHeight: 1.7}}>
                  
                 </div>
            </div>

        </div>
        </>
    )
}