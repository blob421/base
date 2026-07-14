
import type { BannerProps } from "@/app/components/0_required_base/types"
import BgImage from "../images/BgImage"

export default function Banner({text, color, bgColor, height, fontSize, fontFam, 
    bgImg}:BannerProps){
    return (
        <>
      
        <div className={
            height == 'small' ? 
                `row banner_medium ${fontSize? fontSize: 'txtlg'} 
                text-center pt-3 pb-4 pb-xxl-5 pt-xxl-5 mb-xxl-5 mt-xxl-5`

          : height == 'medium' ? 
                `row banner_medium ${fontSize? fontSize: 'txtlg'} 
                text-center pt-4 pb-4 pb-xxl-5 pt-xxl-5 mb-xxl-5 mt-xxl-5`

          : height == 'large' ? 
                `row banner_medium ${fontSize? fontSize: 'txtlg'} 
                text-center pt-5 pb-5 pb-xxl-5 pt-xxl-5 mb-xxl-5 mt-xxl-5` 

          :
                `row banner_medium ${fontSize? fontSize: 'txtlg'} 
                text-center pt-3 pb-3 pb-xxl-5 pt-xxl-5 mb-xxl-5 mt-xxl-5`}
         
          style={{color: color? color: "black", fontFamily: fontFam? fontFam : '',
                  backgroundColor: bgColor? bgColor: "white", 
                  borderTop: bgImg? '2px solid black': '',
                  borderBottom: bgImg ? '2px solid black' : ''
              
          }}>
              {bgImg && <img src={bgImg} className="w-100 position-absolute z-0 banner_bg_image"/>}
            <div className="banner_inner z-1">
                 {text}
            </div>
              
        </div>
        </>
    )
}