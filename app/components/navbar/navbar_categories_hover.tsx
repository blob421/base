
"use client"
type catNavbarProps = {
    sections : category[], image?: string
}

type category = {
    key:string , val:string[]
}

import {useEffect, useState} from "react"

export default function Navbar_categories_hover({sections, image}:catNavbarProps){

   const [hovered, setHovered] = useState<string | undefined>(undefined);
   const [hoveredId, setHoveredId] = useState<number | undefined>(undefined)

   
useEffect(() => {
  function handleMove(e: MouseEvent) {
    const target = e.target as HTMLElement | null

    // If the mouse is NOT inside the navbar or submenu, close it
if (
  !target?.closest('.navbar_cat_row') &&
  !target?.closest('.navbar_cat_row_short') &&
  !target?.closest('.submenu_nav_row_expanded')
) {
  setHovered(undefined)
  setHoveredId(undefined)
}
  }

  document.addEventListener('mousemove', handleMove)
  return () => document.removeEventListener('mousemove', handleMove)
}, [])

    return (
        <>
        <div className={sections.length < 4 ? 'row d-flex justify-content-center navbar_cat_row_short align-items-center'
             :"row d-flex justify-content-center navbar_cat_row align-items-center"}>
            {image && 
            <div className={sections.length < 4 ? "image_grid_nav_short col-2 position-absolute d-flex justify-content-center"
                                      :"image_grid_nav col-2 position-absolute d-flex justify-content-center"}>
                <img src={image} className="nav_grid_logo"/>
            </div>
            }

            <div className="col-lg-6 col-10 grid_nav_cat_main_btn pe-3">
            {sections.map((s, idx) => {
                return (
                    <div className="navbar_cat_col p-1 txt_md" key={idx} 
                    style={{backgroundColor: hoveredId == idx ? 'skyblue': ""}}
                
                    onClick={()=>{
                    hoveredId == idx || sections[idx].val.length < 1 ? window.location.href=`/${idx == 0 ? ""
                                                                     : s.key.toLocaleLowerCase()}`
                                                                     
                                              : setHovered(`cat_${idx}`);
                                               setHoveredId(idx)
                         }}
                         onMouseEnter={() =>{
                            setHovered(`cat_${idx}`);
                            setHoveredId(idx)
                            
                          
                        }}

                >

                      {s.key}
                        <div className={hovered == `cat_${idx}`? 'categories_frame_navbar category_visible' 
                                   : "categories_frame_navbar"} id={`cat_${idx}`}
                      
                      >
               
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
       
         <div className={hovered && hoveredId !== undefined && sections[hoveredId].val.length > 0? "row d-flex justify-content-center submenu_nav_row submenu_nav_row_expanded"
                                 : "row d-flex justify-content-center submenu_nav_row"}>
       
      
            <div className="grid_sub_category col-lg-6 col-10">

             
               {(hoveredId !== undefined && hovered) && sections[hoveredId].val.map((sb, idx) => {
                
                return (
                
                   <a className={"sub_category txt_md txt_sm"} key={`sub_${idx}`} 
                   href={`/${sections[hoveredId].key.toLocaleLowerCase()}/${sb.toLocaleLowerCase()}`}>
                                            {sb}
                    </a>
                  
                )
               })}
                  </div>
      
        </div>
        
 
        </>
    )
}