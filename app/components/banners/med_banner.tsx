
import type { BannerProps } from "@/app/components/types"

export default function Med_banner({text}:BannerProps){
    return (
        <div className="row banner_medium">
                {text}
        </div>
        
    )
}