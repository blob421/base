"use client"

import { useEffect, useState } from "react"
import SideHamMenu from "./menus/side_ham_menu"

type nav = {
    nav_sections: string[], logo: string, bgColor: string, hamStyle:string, 
    hamIconColor?:string, contours: string, borderBottom: boolean
}

export default function NavModern({nav_sections, logo, bgColor, hamIconColor, contours, borderBottom}:nav){

   const [hamTriggered, setHamTriggered] = useState(false)
   const [hamEnlarging, setHamEnlarging] = useState(false)
  

   useEffect(()=>{
     const timeout = setTimeout(()=>{
        if(hamTriggered){
            setHamEnlarging(true)
        }else{
        setHamEnlarging(false)
        }
        }, 100
        
        )
        return () => clearTimeout(timeout)

    }, [hamTriggered])

    
    const [activePage, setActivePage] = useState('')

    useEffect(()=> {                           /// Wait for dom for window

    
        const current_url = window.location.href
        
        const page = current_url.split('/').at(-1)
        if (page)
        setActivePage(page)
        console.log(activePage)
    })


    
    return (
        <>
        <div className="row nav_modern_row m-0 p-0" 
        style={{backgroundColor: bgColor, borderBottom: borderBottom? `1px solid ${contours}` :'0px'}}>
            <div className="col-12 d-flex gap-1 gap-md-5 align-items-center 
            justify-content-end pe-0 pe-sm-3 pe-md-5 position-relative">
           

                <img className="logo_nav_modern ms-3" src={logo}></img>

                {nav_sections && nav_sections.map((s, idx)=>{
                    return (

                        <div className="section_nav_modern p-2 d-flex 
                                       justify-content-center align-items-center txt_sm"
                                       
                             style={{backgroundColor: activePage == s.toLowerCase() ? 'grey'
                                                                                    : 'none'}}
                            
                             key={idx}
                             onClick={()=> window.location.href = `/${s.toLowerCase()}`}>
                            {s}
                        </div>
                    )
                })}

              
                    <img src={hamIconColor ? "/hamIconEmpty.png":'/hamburger_menu_black.png'} 
                    className="nav2_ham_icon_image"
                    onClick={() => setHamTriggered(true)} 
                    style={{backgroundColor: hamIconColor? hamIconColor: '', border: `1px solid ${contours}`}}/>
                  
                 
            </div>
        </div>

    
  

                <SideHamMenu categories={nav_sections.filter(n => !n.includes('.png'))} 
                            setTriggered={(bool) => setHamTriggered(bool)}
                            triggered={hamTriggered}/>
                    
           </>
    )
}