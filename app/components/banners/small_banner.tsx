
import type { BannerProps } from "@/app/components/types"

export default function Small_banner({text}:BannerProps){
    return (
        <div className="row top_banner_landing p-4 p-lg-3 p-xxl-5 text-center txt_lg">
                   
            {text}  
        </div>
        
    )
}