"use client"

type NavbarProps = {
    sections: section[], bgColor?:string, color?: string , 
    height?: "small" | "medium" | "large", decoration?: "classic" | "modern",
     hamBgColor?:string, hamColor?: string

}
type section ={
    text?:string, image?:string
}
import {useState, useEffect} from "react"
export default function Navbar_img_any_flat({sections, bgColor, height, color, decoration, 
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
                     height: height == 'small' ? '9vh':
                             height == 'large' ? '14vh': '11vh',
                             color: color? color: 'white'
                            
             }}>
                
                
               {sections.map((s, idx)=> {
                return(

                    
                    <div key={idx} className="col-2 col-lg-1 txt_sm d-flex justify-content-center">
                        {s.text ? <div className="nav2_text" style={{
                            borderLeft: decoration == 'classic'? '1px solid grey': '0px',
                            borderRight: decoration == 'classic'? '1px solid grey': '0px',
                            padding: decoration == 'classic' ?  '7%' : '0',
                            paddingLeft: decoration == 'classic' ? '11%' : '0',
                            paddingRight: decoration == 'classic' ? '11%' : '0'
                        }}
                         onClick={()=> idx !== 0 ? window.location.href=`/${s.text?.toLocaleLowerCase()}`:
                        window.location.href = '/'}
                        >{s.text}</div> 
                                : <img src={s.image} className="nav2_logo"/>}
                    </div>

                )
               })}
               
                <div className="col-11 nav2_ham_icon d-flex justify-content-end">
                    <img src={'./hamburger_menu_black.png'} className="nav2_ham_icon_image"
                    onClick={() => setHamTriggered(!hamTriggered)}/>
                </div>

        </div>

                {hamTriggered && 
         <div className={hamEnlarging && decoration == 'modern' ? 
         "hamburger_menu_expanded_modern hamburger_menu_initial txt_md": 
         decoration == 'classic' && hamEnlarging ? 
         "hamburger_menu_expanded hamburger_menu_initial txt_md"
                                                                :"hamburger_menu_initial txt_md"
          } style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
          
                   {sections && sections.map((s, idx) => {
                if (!s.text) return;
                return (
            
                idx == 0 ?
                  <button key={idx} className={decoration == 'classic' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } onClick={()=> window.location.href='/'} 
                  style={{backgroundColor: hamBgColor? hamBgColor: 'white',
                           color: hamColor? hamColor: 'black'
                  }}>
                    {s.text}
                  </button>
                         :
                  <button key={idx} className={decoration == 'classic' ?"nav_btn_1" 
                                                                  : 'nav_btn_1_modern'
                  } 
                                    onClick={()=> window.location.href=`/${s.text?.toLocaleLowerCase()}`}
                    style={{backgroundColor: hamBgColor? hamBgColor: 'white',
                           color: hamColor? hamColor: 'black'
                    }}>
                    {s.text}
                  </button>
           )
               })}
             
          </div>
           }
  </>
    )
}