"use client"
import {useState, useEffect} from "react"
type NavbarProps = {
    sections: string[], style: string
}
export default function Navbar_img_left_buttons({sections, style}:NavbarProps){
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
        <div className={style == 'classic' ? "row d-flex justify-content-center mt-1 mt-lg-0": 'row'}>
            <div className={style == 'classic' ?
            "col-11  navbar_main d-flex gap-lg-5 gap-1 align-items-center txt_md": 
            'col-12  navbar_main_modern d-flex gap-lg-5 gap-1 align-items-center txt_md'}>
                <img src={"/hamburger_menu_black.png"}
                 className={hamTriggered? "hamburger_menu_icon_selected hamburger_menu_icon" :"hamburger_menu_icon"} 
                 onClick={() => setHamTriggered(!hamTriggered)}/>
            
                <img src={"/company_logo.jpg"} className={style=='classic'?"company_logo position-absolute start-0 ms-lg-5 ms-4"
                 : "company_logo position-absolute start-0 ms-lg-3 ms-4"
                }/>
               {sections && sections.map((s, idx) => {
                return (
                idx == 0 ?
                  <button key={idx} className={style == 'classic' ?"nav_btn_0" 
                                                                  : 'nav_btn_0_modern'
                  } onClick={()=> window.location.href='/'}>
                    {s}
                  </button>
                         :
                  <button key={idx} className={style == 'classic' ?"nav_btn_0" 
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
         <div className={hamEnlarging && style == 'modern' ? 
         "hamburger_menu_expanded_modern hamburger_menu_initial txt_md": 
         style == 'classic' && hamEnlarging ? 
         "hamburger_menu_expanded hamburger_menu_initial txt_md"
                                                                :"hamburger_menu_initial txt_md"
          }>
          
                   {sections && sections.map((s, idx) => {
                return (
                idx == 0 ?
                  <button key={idx} className={style == 'classic' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } onClick={()=> window.location.href='/'}>
                    {s}
                  </button>
                         :
                  <button key={idx} className={style == 'classic' ?"nav_btn_1" 
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