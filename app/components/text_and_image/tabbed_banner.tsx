'use client'

import {useState} from 'react'


type TextOptions = {
   options: {img: string, name: string, txt:string}[], bgColor?:string
}

export default function Dropdown_text_img({options, bgColor}:TextOptions){
   const [option_idx, setOption] = useState(0)
   
   
    
    return (
        <div className="row dropdown_text_img_main d-flex justify-content-lg-left 
        justify-content-center" 
        style={{backgroundColor: bgColor? bgColor : 'antiquewhite'}}>
        
             <div className="col-lg-2 dropdown_text_img_dropdown flex-column align-items-center
             gap-4 d-grid d-lg-flex p-5 pb-0 pb-lg-5 mb-lg-3 p-lg-0 align-self-md-center">
                {options && options.map((op, idx) => {
                    return (
                        <div key={idx} className="dropdown_text_img_option txt_md justify-self-end" 
                        onClick={()=> setOption(idx)} 
                        style={{backgroundColor: idx== option_idx? 'rgba(0, 0, 0, 0.07)'
                                                                  : bgColor ? bgColor
                                                                  : 'antiquewhite'}}>
                       {op.name}
                     </div>
                     )
                })}
                 
             
             </div>
             
             <div className="col-lg-5 dropdown_text_img_text p-lg-5 pt-5 pt-lg-2 p-5 txt_md
             align-self-lg-center">
                {options && options[option_idx].txt}
             </div>
             <div className="col-lg-5 col-11 dropdown_text_img_image pb-4 pb-lg-0">

                {options && <img src={options[option_idx].img} className='w-100 img-fluid'/> }
             </div>
        </div>
    )
}