
import type { BannerProps } from "@/app/components/0_required_base/types"

export default function Banner({text, color, bgColor, height}:BannerProps){
    return (
        <div className="row banner_medium txt_lg text-center p-4"
          style={{color: color? color: "black", backgroundColor: bgColor? bgColor: "white",
                  height: height == "small" ? "9vh"
                        : height =='medium' ? "12vh" 
                        : height == 'large' ? "15vh"
                        : "12vh"
          }}>
                {text}
        </div>
        
    )
}