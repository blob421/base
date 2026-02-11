

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

    const txt_left_img_right_txt = `Every morning at sunrise, our team heads into the barn to 
    gather eggs that are still warm from the nest. Each one is picked by hand, 
    ensuring only the freshest, most natural eggs make their way to your table. 
    It’s a simple routine rooted in care, tradition, and respect for the animals that make 
    it all possible.. 
    `
    return (      
      <>
        <Banner text="At fresh market , we ensure you get the freshest products" height="large"/>
   
        <Text_left_img_right image="/landing_image.jpg" text={txt_left_img_right_txt}
        textBgColor="rgb(246, 246, 246)" text_img="text_left_img_right_image.png" text_bubbles={false}/>

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