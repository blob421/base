
type props = {
    header: string , subHeaders: string[], image: string, 
    hColor:string, delimiters: string[], altColor: string,
    subHColor:string, text: string, txtColor:string, imageText?: string,
    rowcolor? : string
}
import addColor from "../1_utilities/addColor"
import {useLayoutEffect} from "react"

export default function HeroTxtImgStacked({header, subHeaders, image, hColor, subHColor,
     delimiters, txtColor, altColor, text, imageText, rowcolor}:props){



    useLayoutEffect(()=>{
    
        const ctaDiv = document.querySelector('.hero_img_stacked_text')


        if (delimiters && altColor && ctaDiv){
            const new_txt = addColor(text, delimiters, altColor)
            if (new_txt)
             
                 ctaDiv.innerHTML = new_txt
        
        }
        else if (ctaDiv){
               ctaDiv.innerHTML = text
        
        }
    
        },[])



    return (
        <>
        <div className="row p-0 m-0 pt-3 pb-md-2 d-flex justify-content-center justify-content-md-start"
        style={{backgroundColor: 'rgba(32, 217, 227, 0.48)'}}>
               <div className="ps-lg-5 p-4 pt-2 pe-lg-5 pb-4 d-flex flex-column 
                               
                               align-items-center align-items-lg-start col_headers_hero_img">

                 <div className="hero_img_stacked_headers_cont ms-lg-5 ps-lg-5">
                    <div className="hero_img_stacked_header txt_xl" style={{color: hColor}}>
                        {header}
                    </div>

                    {subHeaders.map((s, idx)=> {
                        return(
                            <div className="hero_img_stacked_subheaders txt_sm_wide" 
                                 key={`hero_img_stacked_${idx}`}
                                 style={{color: subHColor}}>
                                {s}
                            </div>
                        )
                    })}
                 </div>
                </div>
        </div>

        <div className="row p-0 m-0 p-4 pb-1 pt-5 pb-lg-5 pt-2 d-flex gap-5 gap-md-5 align-items-start 
            justify-content-center row_bottom_hero_img_stacked" 
             style={{backgroundColor: 'rgba(42, 205, 242, 0.54)', 
             borderTop: '1px solid black' }}>

                 <h1 style={{width:'100%', textAlign: 'center', color:'white'}} 
                 className="txt_xl pb-0 pb-md-4 pt-1 col-md-12">
                    Brave the dangers
                    </h1>

            <div className="col-12 col-sm-11 col-md-5 hero_img_stacked_txt_wrapper 
            txt_md p-5 p-md-5 order-2 order-lg-1">
                   

                   
                    <div className="hero_img_stacked_text" style={{color:txtColor}}>
                        {text}
                    </div>
                    <ul className="txt_lg mt-5 ps-3" style={{color: 'white'}}>
                        <li>Ride uncharted areas</li>
                        <li>Get transported in heli-transporter</li>
                        
                    </ul>
                    

            </div>

            <div className="col-12 col-sm-11 col-md-5 g-0 pe-md-0 pt-0 order-1 order-lg-2">
                   <div className="hero_img_stacked_imgs_cont">
                    
                     
                        <img src={image}
                                />
                                     
                            
                     

                   </div>
                   
                   <div className="hero_img_stacked_img_memo pe-2 txt_sm pt-3">
                     {imageText && imageText}
                   </div>
                   
               </div> 
        </div>
        </>
    )
}