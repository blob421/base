
import {useState} from 'react'


export default function Dropdown_text_img(){
   const [option_idx, setOption] = useState(0)

   const options = [
    {img: '/dropdown_text_img_0.jpg', name: 'Some option A',
                       txt: `Weather river cloud animal star? Window plate phone, 
                       apple fruit spoon watch heavy dream understand. 
                       Phone sun star watch field. Small water sand love notebook? 
                       Animal old lie drink, weather apple long break write warm! 
                       Love warm light furniture earth star. Laugh fast, star think 
                       tree fresh understand pen heavy, eat furniture open. Weather heavy loud 
                       sweet sun river eat, pen. Low lie salt draw roof, rain drink star old slow
                        understand, light search fruit.`},

    {img: '/dropdown_text_img_1.jpg',  name: 'Some option B',
                       txt: `Weather river cloud animal star? Window plate phone, 
                       apple fruit spoon watch heavy dream understand. 
                       Phone sun star watch field. Small water sand love notebook? 
                       Animal old lie drink, weather apple long break write warm! 
                       Love warm light furniture earth star. Laugh fast, star think 
                       tree fresh understand pen heavy, eat furniture open. Weather heavy loud 
                       sweet sun river eat, pen. Low lie salt draw roof, rain drink star old slow
                        understand, light search fruit.`}

   ]
    
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