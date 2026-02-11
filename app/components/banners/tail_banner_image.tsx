

import type { BannerProps } from "@/app/components/0_required_base/types"

export default function Tail_banner_image({text, img, color, bgColor, height}:BannerProps){

    return (
        <div className="row tail_banner mt-4 p-lg-4 p-4 pb-lg-2 pt-lg-2 pt-4 pb-4 p-xxl-5"
         style={{color: color? color: "black", backgroundColor: bgColor? bgColor: "white",
                  minHeight: height == "small" ? "9vh"
                        : height =='medium' ? "12vh" 
                        : height == 'large' ? "15vh"
                        : "12vh"
         }}>
            <div className="col-12 d-flex tail_banner_inner justify-content-center align-items-center"
           >
                <div className={height == 'small'? "tail_banner_text txt_sm" 
                                                 : "tail_banner_text txt_lg"}>
                {text}
                </div>
                <img src={img} className="tail_img"/>
            </div>

        </div>
    )
}