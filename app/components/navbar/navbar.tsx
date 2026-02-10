"use client"
import {useState, useEffect} from "react"
type NavbarProps = {
    home?: boolean, about?: boolean, products?:boolean, contact?: boolean
}
export default function Navbar({home, about, products, contact}:NavbarProps){
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
        <div className="navbar_main row">
            <div className="col-12 d-flex gap-lg-5 gap-1 justify-content-end justify-content-lg-center align-items-center
           p-3 txt_md">
                <img src={"/hamburger_menu_black.png"}
                 className={hamTriggered? "hamburger_menu_icon_selected hamburger_menu_icon" :"hamburger_menu_icon"} 
                 onClick={() => setHamTriggered(!hamTriggered)}/>
            
                <img src={"/company_logo.jpg"} className="company_logo position-absolute start-0 ms-lg-2"/>

                {home && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/'}>
                    Home
                </button>
                }
                { products && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/products'}>
                    Products
                </button>

                }
                { about && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/'}>
                    About
                  </button>

                }
                { contact && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/contact'}>
                    Contact
                  </button>

                }

              </div>
        </div>

           {hamTriggered && 
         <div className={hamEnlarging?"hamburger_menu_expanded hamburger_menu_initial txt_md": "hamburger_menu_initial txt_md" }>
          
                         {home && 
                  <button className="nav_btn_1" onClick={()=> window.location.href='/'}>
                    Home
                </button>
                }
                { products && 
                  <button className="nav_btn_1" onClick={()=> window.location.href='/products'}>
                    Products
                </button>

                }
                { about && 
                  <button className="nav_btn_1" onClick={()=> window.location.href='/'}>
                    About
                  </button>

                }
                { contact && 
                  <button className="nav_btn_1" onClick={()=> window.location.href='/contact'}>
                    Contact
                  </button>

                }
             
          </div>
           }
     
        </>
    )
}