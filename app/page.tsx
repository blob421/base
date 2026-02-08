

import Text_left_img_right from "./components/landing_page/text_left_img_right"
import Big_carousel from "./components/landing_page/big_carousel"

import type { BigCarouselProps, Image } from "@/app/types"
export default function LandingPage(){
    const car_images:Image[] = [{url: "landing_image.jpg"},
                                {url: "car_img_0.jpg"}
    ]

    return (      
      <>
        
        <div className="row top_banner_landing">
           
                    At fresh market , we ensure you get the freshest products    
        </div>

        <Text_left_img_right/>
        <div className="row banner_medium">
                 Explore our products 
        </div>
        <Big_carousel images={car_images}/>
        <div className="row carousel_banner_landing">

        </div>

      </>
    )
}