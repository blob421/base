'use client'

type herotxtprops = {
    callToAction: string, subHeaders: string[] , header: string, colorDelimiters: string[],
    delColor: string
}
import { useLayoutEffect, useState } from "react"
export default function HeroText({callToAction, subHeaders, header, colorDelimiters, delColor}:herotxtprops)
 
{ 

    useLayoutEffect(()=>{

    let  deletemited_text = callToAction.split(' ')
    deletemited_text = deletemited_text.filter(c => c !== '' && !c.includes('\n') )
    
    const idx:number[] = []
    const ctaDiv = document.querySelector('.text_right')


    colorDelimiters.forEach(d=> {
        idx.push(deletemited_text.indexOf(d))
    })

  

    let finalStr = ''

    if (idx.length > 0 && ctaDiv){

        deletemited_text.forEach((w, i)=> {

            if (idx.includes(i) && (idx.indexOf(i)) % 2 == 0){
               finalStr += `<span style='color: ${delColor}'> ` +  w + " "
            }
            else if ((idx.includes(i) && (idx.indexOf(i)) % 2 == 1)){
               finalStr += w + ' </span>'
            }
            else {
                finalStr += w + ' '
            }
        })

            console.log(finalStr)
            ctaDiv.innerHTML = finalStr

    }
    else {
        if (ctaDiv)
            ctaDiv.innerHTML = callToAction
    }

    },[])


    return (
        <>
         <style>
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
         </style>

        <div className="row p-0 m-0 row_full_size_img_hero_txt h-100 w-100 mb-5 pt-3 pt-sm-4">

            <div className="col-12 col-md-6 hero_txt_full h-100 g-0">

                    <div className="p-4 pb-5 pb-md-4 mb-md-3">

                    
                        <div className="text_0 txt_xl">
                            {header}
                        </div>

                        {subHeaders.map((h, idx)=> {
                            return(
                                <div key={idx} className="txt_sm">
                                    {h}
                                </div>
                            )
                        })}
                   </div>

                
              
            </div>

            < div className="col-12 col-md-6 p-4 pb-2 pb-md-5 p-md-5 pt-0 pt-md-5">
                 <div className="text_right txt_sm">
                  
                 </div>
            </div>

        </div>
        </>
    )
}