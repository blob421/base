
type Text_left_image_right_props = {
  image? : string, text?: string, BgColor?: string, 
  color?: string, text_img?: string,
  textHeight?: 'full' | 'half',
  displaced: boolean

  imagePosition?: "left-top" | "left-bottom" | "right-top" | "right-bottom"
}

export default function Text_left_img_right({image, text, BgColor, color,
                             text_img, imagePosition, displaced,
                             textHeight}:Text_left_image_right_props){


  return (
    <div className={imagePosition == "right-top" 
                 || imagePosition == "left-bottom" 

                 ? 'row text_left_img_right_main d-flex justify-content-center flex-row-reverse'
                         
                 :"row text_left_img_right_main d-flex justify-content-center"}>

    {(imagePosition == "right-top" || imagePosition == "left-top" || !imagePosition)  &&   

    <div className={`col-lg-6 col-11 text_left_img_right_image`}>
                  <img src={image} className={`img-fluid ${displaced? 'mb-3 m-lg-3' : ""} h-100`}></img>
            </div>
}  
            <div className="col-lg-5 col-11 text_left_img_right_text">

              <div className="text_left_img_right_text_content txt_md
                mb-lg-2 mb-3"

              style={{color: color? color : "black", 
                     backgroundColor: BgColor? BgColor: "white",
                     minHeight: textHeight == 'full' ? '100%' : '75%' }}>
                <div>
                   {text}
                </div>

                   {text_img && 
                   
                       <img src={text_img} className="text_left_img_right_textimg"></img>
                
        
              }
              </div>
             
              
          
            </div>
    {(imagePosition == "right-bottom" || imagePosition  == "left-bottom")  &&                                                
    <div className={`col-lg-6 col-11 mt-3 mt-lg-0 text_left_img_right_image`}>
                  <img src={image} className={`img-fluid ${displaced? 'mb-4 m-lg-3' : ""} h-100`}></img>
            </div>
} 

        
        </div>
    )
}