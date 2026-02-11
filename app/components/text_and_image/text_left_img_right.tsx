
type Text_left_image_right_props = {
  image? : string, text?: string
}

export default function Text_left_img_right({image, text}:Text_left_image_right_props){
    return (
          <div className="row text_left_img_right_main">

            <div className="col-lg-6 text_left_img_right_text">

              <div className="text_left_img_right_text_content p-4 txt_md">
                {text}
              </div>
            </div>


            <div className="col-lg-6 text_left_img_right_image">
                  <img src={image} className="img-fluid h-100"></img>
            </div>

        </div>
    )
}