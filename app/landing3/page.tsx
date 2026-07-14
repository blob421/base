'use client'

import Banner from "../components/banners/banner"
import BgImage from "../components/images/BgImage"
import HeroTxtImgStacked from "../components/text_and_image/hero_txt_stacked_img"
import Text_image_float from "../components/text_and_image/text_image_float"
import TabbedImages from "../components/images/tabbed_images"
import Spacer from "../components/spacer"
import ImageMosaic from "../components/images/mosaic"
import Tail_banner_image from "../components/banners/tail_banner"


const cta_text = `At Wave , we think that surfing waves should be done right . That's why 
                        we hire the best consultants so you never miss a chance at an exciting venture. 
                        We made it our mission to find the right spot for your surfing endeavors
                        and have done so since 20 years . Sit tight and get instant notifications 
                        on current geosismic activities , pick a location and we book your flight .`
const tabbed_images = [{
    url: 'img1.png', 
    name: 'Volcano islands', 
    text: `Situated in the moutains of hawaii, valcanos erupt leaving small chances to get out 
    alive. Even the most experimented surfers encounter difficulties in this harsh landscape`
    , title: 'Hostile playground'
},
{
    url: 'img0.png', name: 'Azurian rapids', text: 'Brave dangerous currents and avoid rocks at any cost ! The most thrilling adventure so far .'
    , title: 'Test your might'
}]
export default function Landing3(){
    return (
       <>
       <style>
            @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Changa+One:ital@0;1&family=Montenegrin+Gothic+One&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
           
            </style>

       <BgImage img="/july_gen_33.png" imgMob="/july_gen_33_mob.png"/>

       <HeroTxtImgStacked image={'surf2.jpg'} 
                          header="The Wave company" 
                          subHeaders={['Adventures await']}
                          txtColor="rgb(244, 244, 244)"
                          hColor="rgb(49, 91, 180)" 
                          altColor="rgb(199, 158, 47)"
                          subHColor="rgb(232, 233, 236)"
                          text={cta_text} delimiters={['the', 'consultants']}
                          imageText="Picture of bob riding a wave"/>
    <Banner text="Venture into uncharted territories" color="rgb(252, 252, 252)" 
    bgColor="rgb(255, 255, 255)" fontSize="txt_xl" height="large" 
    fontFam="'Permanent Marker', cursive" bgImg="/b_banner.png"></Banner>

  
    <Spacer h={8} color="turquoise"/>
    <TabbedImages images={tabbed_images} rowColor="rgba(67, 152, 208, 0.84)" shape="square"/>

    <Spacer h={4} color="turquoise"/>


    <Tail_banner_image text={'Book your adventure today . Are you ready adventurer ?'} 
    height="large" fontSize="txt_sm_wide"
    link={{'href': '/', 'word': 'today'}}/>
  
       </>

      
    )
}