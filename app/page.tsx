

import Text_left_img_right from "./components/text_and_image/text_left_img_right"
import Carousel_med_center from "./components/carousel/carousel_text_left_med"
import Tail_banner_image from "./components/banners/tail_banner_image"

import Banner from "./components/banners/banner"
import type { Image } from "@/app/components/0_required_base/types"

export default function LandingPage(){

    const carousel_images:Image[] = [

      {url: "landing_image.jpg"},
      {url: "car_img_0.jpg"}
    ]

    const txt_left_img_right_txt = `The European languages are members of the same family. Their 
    separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. 
    The languages only differ in their grammar, their pronunciation and their most common words. 
    Everyone realizes why a new common language would be desirable: one could refuse to pay expensive 
    translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more 
    common words. If several languages coalesce, the grammar of the resulting language is more simple and
     regular than that of the individual languages. The new common language will be more simple and 
     regular than the existing European languages. 
`
    return (      
      <>
        <Banner text="At fresh market , we ensure you get the freshest products"/>
   
        <Text_left_img_right image="/landing_image.jpg" text={txt_left_img_right_txt}/>

        <Banner text="Explore our products"/>

        <Carousel_med_center images={carousel_images} 
        textLeft="Made for you and your family , without pesticides or GMO ."/>
 
         <Tail_banner_image 
          text="By buying local , you can make a real difference and encourage farmers that grows 
               real healty food"

          img="/tail_logo.png"
          bgColor="rgb(169, 217, 251)"
          
          />
      </>
    )
}