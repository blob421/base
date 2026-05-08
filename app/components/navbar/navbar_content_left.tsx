"use client"

import {useState, useEffect} from "react"

type NavbarProps = {
    sections: string[], style?: 'round' | 'fill', image: string | '/img.png', bg_color?: string,
    color?: string
}

export default function Navbar_Left({sections, style, image, 
   bg_color, color}:NavbarProps){
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
    return (
      <>
        <div className={style == 'round' ? "row d-flex justify-content-center mt-1 mt-lg-1"
                                         : 'row'}>

            <div className={style == 'round' ?
            "col-11 navbar_main d-flex gap-lg-5 gap-5 txt_md justify-content-start align-items-center": 
            'col-12 navbar_main_modern d-flex gap-lg-5 gap-5 ps-4 justify-content-start align-items-center txt_md'}
             style={{color: color? color: 'black', backgroundColor: bg_color? bg_color:  'rgb(172, 210, 243)'}}
            >


                <img src={"/hamburger_menu_black.png"}
                 className={hamTriggered ? "hamburger_menu_icon_selected hamburger_menu_icon position-absolute" 
                                         :"hamburger_menu_icon"} 

                 onClick={() => setHamTriggered(!hamTriggered)}/>
            
                <img src={image} className={"company_logo"}/>
               {sections && sections.map((s, idx) => {
                return (
                idx == 0 ?
                  <button key={idx} className={style == 'round' ?"nav_btn_0" 
                                                                  : 'nav_btn_0_modern'
                  } onClick={()=> window.location.href='/'}>
                    {s}
                  </button>
                         :
                  <button key={idx} className={style == 'round' ?"nav_btn_0" 
                                                                  : 'nav_btn_0_modern'
                  } 
                                    onClick={()=> window.location.href=`/${s.toLocaleLowerCase()}`}>
                    {s}
                  </button>
           )
               })}
              

              </div>
        </div>

           {hamTriggered && 
         <div className={hamEnlarging && style == 'fill' ? 
         "hamburger_menu_expanded_modern hamburger_menu_initial txt_md": 
         style == 'round' && hamEnlarging ? 
         "hamburger_menu_expanded hamburger_menu_initial txt_md"
                                                                :"hamburger_menu_initial txt_md"
          }>
          
                   {sections && sections.map((s, idx) => {
                return (
                idx == 0 ?
                  <button key={idx} className={style == 'round' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } onClick={()=> window.location.href='/'}>
                    {s}
                  </button>
                         :
                  <button key={idx} className={style == 'round' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } 
                                    onClick={()=> window.location.href=`/${s.toLocaleLowerCase()}`}>
                    {s}
                  </button>
           )
               })}
             
          </div>
           }
     
        </>
    )
}