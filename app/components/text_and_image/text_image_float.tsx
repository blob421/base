type Text_image_float_props = {
    text: string , position: string, image: string
}
export default function Text_image_float({text, position, image}: Text_image_float_props){
    return (
        <div className="row justify-content-center txt_img_float_row">
            <div className="col-lg-8 col-11 txt_img_float_main txt_md">

                <img src={image} className="txt_img_float"
                style={{float: position, marginRight: position == 'left' ? '2.5%': 0,
                                         marginLeft: position == 'right' ? '2%' : 0
                }}/>

             
                {text}
           
            </div>
        </div>
    )
}