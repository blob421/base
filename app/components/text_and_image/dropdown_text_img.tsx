
import {useState} from 'react'

import type { ChoiceTextImageProps } from '../0_required_base/types'

export default function Dropdown_text_img({options}:ChoiceTextImageProps){
   const [option_idx, setOption] = useState(0)

   
    
    return (
        <div className="row dropdown_text_img_main d-flex">
        
             <div className="col-lg-3 dropdown_text_img_dropdown flex-column align-items-center
             gap-4 d-grid d-lg-flex p-5 pb-0 pt-lg-5 p-lg-0">
                {options && options.map((op, idx) => {
                    return (
                        <div key={idx} className="dropdown_text_img_option txt_md" 
                        onClick={()=> setOption(idx)}>
                       {op.name}
                     </div>
                     )
                })}
                 
             
             </div>
             
             <div className="col-lg-4 dropdown_text_img_text p-lg-3 pt-lg-5 pt-5 p-5 txt_md">
                {options && options[option_idx].txt}
             </div>
             <div className="col-lg-5 dropdown_text_img_image">

                {options && <img src={options[option_idx].img} className='w-100'/> }
             </div>
        </div>
    )
}