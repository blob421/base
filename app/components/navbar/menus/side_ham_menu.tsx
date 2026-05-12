'use client'
import { useState, useEffect } from "react"

type sideHam = {
    categories: string[], triggered : boolean, setTriggered : (bool:boolean) => void
}
export default function SideHamMenu({categories, triggered, setTriggered}:sideHam){

    return (
       <div className={triggered? 'side_ham_menu_show side_ham_menu_main': 'side_ham_menu_main'}>
          
           <div className="title_div_side_ham txt_lg d-flex justify-content-center">
            Navigation
           </div>
            {categories.map((cat, idx) => {
                return (
                    <div key={idx} className="cat_side_ham txt_md" 
                         onClick={()=> window.location.href= `/${cat.toLocaleLowerCase()}`}>
                        {cat}
                    </div>
                )
            })}
             <div className="logo_cont_side_ham">
              <img src={'/right_arrow.png'} className="logo_side_ham" onClick={()=> setTriggered(false)}/>
           </div>
       </div>
    )
}