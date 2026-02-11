
import type { BannerProps } from "@/app/components/0_required_base/types"

export default function Med_banner({text}:BannerProps){
    return (
        <div className="row banner_medium txt_lg">
                {text}
        </div>
        
    )
}