

import Text_left_img_right from "./components/text_and_image/text_left_img_right"
import Big_carousel from "./components/carousel/carousel_text_left_med"
import Tail_banner from "./components/banners/large_banner_img"
import Top_banner from "./components/banners/small_banner"
import Mid_banner from "./components/banners/med_banner"
import type { BigCarouselProps, Image } from "@/app/components/types"

export default function LandingPage(){
    const car_images:Image[] = [{url: "landing_image.jpg"},
                                {url: "car_img_0.jpg"}
    ]

    return (      
      <>
        <Top_banner text="At fresh market , we ensure you get the freshest products  "/>
   
        <Text_left_img_right/>

        <Mid_banner text="Explore our products"/>

        <Big_carousel images={car_images}/>
 
         <Tail_banner 
          text="By buying local , you can make a real difference and encourage farmers that grows 
               real healty food"

          img="/tail_logo.png"
          />
      </>
    )
}