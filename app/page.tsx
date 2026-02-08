

import Text_left_img_right from "./components/landing_page/text_left_img_right"
import Big_carousel from "./components/landing_page/big_carousel"
import Tail_banner from "./components/landing_page/banners/tail_banner"
import Top_banner from "./components/landing_page/banners/top_banner"
import Mid_banner from "./components/landing_page/banners/mid_banner"
import type { BigCarouselProps, Image } from "@/app/types"

export default function LandingPage(){
    const car_images:Image[] = [{url: "landing_image.jpg"},
                                {url: "car_img_0.jpg"}
    ]

    return (      
      <>
        <Top_banner/>
   
        <Text_left_img_right/>

        <Mid_banner/>

        <Big_carousel images={car_images}/>
 
         <Tail_banner/>
      </>
    )
}