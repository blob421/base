
import type { BannerProps } from "@/app/components/0_required_base/types"

export default function Banner({text, color, bgColor, height}:BannerProps){
    return (
        <div className={height == 'small' ? "row banner_medium txt_lg text-center pt-3 pb-4 mb-3 mt-3 pb-xxl-5":
            height == 'medium' ? "row banner_medium txt_lg text-center pt-4 pb-4 mb-3 mt-3 pb-xxl-5":
            height == 'large' ? "row banner_medium txt_lg text-center pt-5 pb-5 mb-3 mt-3 pb-xxl-5" 
            :"row banner_medium txt_lg text-center pt-3 pb-3 mb-3 mt-3 pb-xxl-5"}
         
          style={{color: color? color: "black", backgroundColor: bgColor? bgColor: "white",
              
          }}>
            <div className="banner_inner">
  {text}
            </div>
              
        </div>
        
    )
}