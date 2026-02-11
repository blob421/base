
type Text_left_image_right_props = {
  image? : string, text?: string, textBgColor?: string, color?: string, text_img?: string,
  text_bubbles?: boolean
}

export default function Text_left_img_right({image, text, textBgColor, color,
   text_img, text_bubbles}:Text_left_image_right_props){
    return (
          <div className="row text_left_img_right_main d-flex justify-content-center">

            <div className="col-lg-5 col-11 text_left_img_right_text">

              <div className="text_left_img_right_text_content txt_md
                mb-lg-2 mb-3"
              style={{color: color? color : "black", backgroundColor: textBgColor? textBgColor: "white"}}>
                <div>
                   {text}
                </div>

                   {text_img && 
                   
                       <img src={text_img} className="text_left_img_right_textimg"></img>
                
        
              }
              </div>
             
              
          
            </div>


            <div className="col-lg-6 col-11 text_left_img_right_image">
                  <img src={image} className="img-fluid h-100"></img>
            </div>

        </div>
    )
}