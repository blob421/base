
import type { BannerProps } from "@/app/components/0_required_base/types"
import BgImage from "../images/BgImage"

export default function Banner({text, color, bgColor, height, fontSize, fontFam, 
    bgImg, shape}:BannerProps){
    return (
        <>
      
        <div className={`row banner_medium ${fontSize? fontSize: 'txtlg'}`}
             
         
          style={{color: color? color: "black", fontFamily: fontFam? fontFam : '',
                  backgroundColor: bgColor? bgColor: "white", 
                  borderTop: bgImg ?  '1px solid black': 
                            shape =="round" || shape == 'round-right' ? '2px solid black':'',
                  borderBottom: bgImg ? '1px solid black' : '',
                  borderTopLeftRadius: shape =="round" ? '45%': 'unset',
                  borderTopRightRadius: shape =="round" || shape == 'round-right' ? '45%': 'unset',
                 
                  height: height == 'small' ? 'max(12vh, 8vw)'
                        : height == 'medium' ? 'max(16vh, 10vw)'
                        : height == 'large' ? 'max(18vh, 12vw)'
                        : height == 'x-large' ? 'max(20vh, 14vw)': 'max(12vh, 8vw)'
              
          }}>
              {bgImg && <img src={bgImg} className="w-100 position-absolute z-0 banner_bg_image"/>}
            <div className="banner_inner z-1">
                 {text}
            </div>
              
        </div>
        </>
    )
}