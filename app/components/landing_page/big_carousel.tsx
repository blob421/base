import Carousel from "../carousel"

import type {BigCarouselProps} from "@/app/types"

export default function Big_carousel({images}:BigCarouselProps){
    return (
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9 carousel_border">
                 <div className="row">

                
                    <div className="col-lg-2 pt-lg-5 p-3 carousel_border_text d-flex 
                    justify-content-center align-items-center align-items-lg-start text-center
                    text-lg-start">
                        Made for you and your family , without pesticides or GMO .
                    </div>
                    <div className="col-lg-9">
                        <Carousel images={images} big={true}/>
                    </div>
                    
                </div>
          </div>

       
       
        </div>
    )
}