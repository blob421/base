import Carousel_base from "./carousel_base"

import type {CarouselProps} from "@/app/components/0_required_base/types"

export default function Carousel_med_center({images, textLeft, textRight}:CarouselProps){
    return (
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
                 <div className="row d-flex justify-content-center">

                    {textLeft &&
                           <div className="col-lg-2 pt-lg-5 p-3 carousel_border_text d-flex 
                            justify-content-center align-items-center align-items-lg-start text-center
                            text-lg-start txt_md">
                                {textLeft}
                            </div>
                    }
             
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <Carousel_base images={images} big={true}/>
                    </div>

                 

                    {textRight &&
                           <div className="col-lg-2 pt-lg-5 p-3 carousel_border_text d-flex 
                            justify-content-center align-items-center align-items-lg-start text-center
                            text-lg-start txt_md">
                                {textRight}
                            </div>
                    }

                    
                </div>
          </div>

       
       
        </div>
    )
}