

import type { BannerProps } from "@/app/components/types"

export default function Large_banner_img({text, img}:BannerProps){

    return (
        <div className="row tail_banner mt-4 p-3">
            <div className="col-12 d-flex tail_banner_inner justify-content-center">
                <div className="tail_banner_text">
                {text}
                </div>
                <img src={img} className="tail_img"/>
            </div>

        </div>
    )
}