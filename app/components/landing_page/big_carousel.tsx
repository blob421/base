import Carousel from "../carousel"

import type {BigCarouselProps} from "@/app/types"

export default function Big_carousel({images}:BigCarouselProps){
    return (
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 carousel_border pt-5">
              <div className="carousel_border_text">
                   Made for you and your family, without pesticides or GMO .
              </div>
         
          </div>

          <div className="col-7 d-flex justify-content-center big_carousel_main">
              <Carousel images={images} big={true}/>
          </div>

          <div className="col-lg-2 col-0 carousel_border">
            
          </div>

       
       
        </div>
    )
}