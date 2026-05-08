"use client"

type NavbarProps = {
    pair_sections_with_img_path_middle: string[], bgColor?:string, color?: string , 
    style?: "classic" | "modern",
    hamBgColor?:string, hamColor?: string

}

import {useState, useEffect} from "react"

export default function NavbarCentered({pair_sections_with_img_path_middle, bgColor, color, style, 
    hamBgColor, hamColor}:NavbarProps){

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
        <div className="row navbar_2" 
             style={{backgroundColor: bgColor? bgColor : 'rgb(68, 68, 68)',
                    height: '14vh', color: color ? color : 'white'
                            
             }}>
                
                
               {pair_sections_with_img_path_middle.map((s, idx)=> {
                return(

                    
                    <div key={idx} className="col-2 col-lg-1 txt_sm d-flex justify-content-center">
                        {idx == (Math.floor(pair_sections_with_img_path_middle.length / 2))    ? 
                         <img src={s} className="nav2_logo" onClick={() => window.location.href = '/'}/>
                                                                     : 
                        <div className="nav2_text" style={{
                            borderLeft: style == 'classic'? '1px solid grey': '0px',
                            borderRight: style == 'classic'? '1px solid grey': '0px',
                            padding: style == 'classic' ?  '7%' : '0',
                            paddingLeft: style == 'classic' ? '11%' : '0',
                            paddingRight: style == 'classic' ? '11%' : '0'
                        }}
                         onClick={()=> window.location.href=`/${s?.toLocaleLowerCase()}`}
                        >{s}</div> 
                               }
                    </div>

                )
               })}
               
                <div className="col-11 nav2_ham_icon d-flex justify-content-end">
                    <img src={'./hamburger_menu_black.png'} className="nav2_ham_icon_image"
                    onClick={() => setHamTriggered(!hamTriggered)}/>
                </div>

        </div>

                {hamTriggered && 
         <div className={hamEnlarging && style == 'modern' ? 
         "hamburger_menu_expanded_modern hamburger_menu_initial txt_md": 
         style == 'classic' && hamEnlarging ? 
         "hamburger_menu_expanded hamburger_menu_initial txt_md"
                                                                :"hamburger_menu_initial txt_md"
          } style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
          
                   {pair_sections_with_img_path_middle && 
                   pair_sections_with_img_path_middle.map((s, idx) => {
                if (idx == (Math.floor(pair_sections_with_img_path_middle.length / 2))) return;
                return (
            
            
                  <button key={idx} className={style == 'classic' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } 
                                    onClick={()=> window.location.href=`/${s.toLocaleLowerCase()}`}
                    style={{backgroundColor: hamBgColor? hamBgColor: 'white',
                           color: hamColor? hamColor: 'black'
                    }}>
                    {s}
                  </button>
           )
               })}
             
          </div>
           }
  </>
    )
}