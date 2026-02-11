import Carousel_base from "./carousel_base"

import type {BigCarouselProps} from "@/app/components/0_required_base/types"

export default function Carousel_text_left_med({images}:BigCarouselProps){
    return (
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9 carousel_border">
                 <div className="row">

                
                    <div className="col-lg-2 pt-lg-5 p-3 carousel_border_text d-flex 
                    justify-content-center align-items-center align-items-lg-start text-center
                    text-lg-start txt_md">
                        Made for you and your family , without pesticides or GMO .
                    </div>
                    <div className="col-lg-9">
                        <Carousel_base images={images} big={true}/>
                    </div>
                    
                </div>
          </div>

       
       
        </div>
    )
}