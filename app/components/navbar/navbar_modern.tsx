"use client"

import { useEffect, useState } from "react"
type nav = {
    sections: string[], logo: string
}

export default function NavModern({sections, logo}:nav){

    const [activePage, setActivePage] = useState('')

    useEffect(()=> {                           /// Wait for dom for window

        const current_url = window.location.href
        
        const page = current_url.split('/').at(-1)
        if (page)
        setActivePage(page)
        console.log(activePage)
    })


    
    return (
        <div className="row nav_modern_row m-0 p-0">
            <div className="col-12 d-flex gap-5 align-items-center 
            justify-content-end pe-4 position-relative">
           

                <img className="logo_nav_modern ms-3" src={logo}></img>

                {sections && sections.map((s, idx)=>{
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
                 
            </div>
        </div>
    )
}