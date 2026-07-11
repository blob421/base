"use client"

import { useState, useEffect, useRef } from "react"

type img = {
    images: {url:string, name:string, title?:string , text?:string, txtColor?:string}[]
}

export default function TabbedImages({images}:img){
    const [cI, setCi] = useState(0)
    const [useClickedTab , setTabClicked] = useState(false)
    const iRef = useRef(0)

    const setInterval = () => {

       return window.setInterval(()=>{
   
          setCi(prev => (prev + 1) % images.length)

        }, 10000)
    }


    useEffect(()=> {
        if (!iRef.current) {
            iRef.current = setInterval()
        }
      
   
        return () => {

            window.clearInterval(iRef.current)
            iRef.current = 0
        }

    }, [])


   useEffect(()=> {
     if (!useClickedTab) return ;

          window.clearInterval(iRef.current)
          iRef.current = setInterval()

    setTabClicked(false)



   }, [cI])

    
    return (
        <div className="row tabbed_img_row m-0 p-0 mt-4">
            <div className="col-12 col-md-10 g-0">
               <div className="col_img_cont_tabbed_img">
            
                    <div className="ps-3 img_tabbed_tabs_cont txt_sm p-1 mb-0">
                        {images.map((i, idx)=>{
                            return(
                                <div key={`tab_${idx}`} 
                                className={idx !== cI  ? "img_tab_btn"
                                                       : "img_tab_btn tab_img_selected"
                                }
                                onClick={()=> {setCi(idx); setTabClicked(true)}}>
                                    {i.name}
                                </div>
                            )
                        })}
                    </div>

                    {images.map((i, idx)=>{
                        return (
                            <div className="row image_cont_tabbed_img m-0 p-0" key={`img_${idx}`}
                             hidden={cI !== idx} >
                                <div className="col-12 g-0">
                                             <img src={i.url}
                                     className="img_tabbed_img"/>
                                </div>
                       

                                <div className="col-5 col-md-4 g-0 text_img_tab_container 
                                " 
                                hidden={(!i.title) || (!i.title && !i.text)}
                                style={{color: i.txtColor? i.txtColor : 'white'}}>

                                        <div className="img_title_tab txt_xl">
                                            {i.title && i.title}
                                        </div>
                                        <div className="img_text_tab">
                                            {i.text && i.text}
                                        </div>
                                  </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}