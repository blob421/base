'use client'

import { useEffect, useState } from "react"


type imgProps = {
    img:string, imgMob:string
}

export default function BgImage({img, imgMob}:imgProps){

    const [isMob, setMob] = useState(false)

    useEffect(()=> {
       setMob(window.innerWidth <= 820 || window.screen.orientation.type == 'portrait-primary')

       const resize = () => window.addEventListener('resize', ()=> {
           setMob(window.innerWidth <= 820 || window.screen.orientation.type == 'portrait-primary')
       })
       
       resize()
       return () => window.removeEventListener('resize', resize)

    },[])

    return(
       <img src={isMob? imgMob : img} className="g-0 img_full_hero_txt w-100 img-fluid"/>
    )

    
}