'use client'

import Banner from "../components/banners/banner"
import BgImage from "../components/images/BgImage"
import HeroTxtImgStacked from "../components/text_and_image/hero_txt_stacked_img"
import Text_image_float from "../components/text_and_image/text_image_float"
import TabbedImages from "../components/images/tabbed_images"
import Spacer from "../components/spacer"
import ImageMosaic from "../components/images/mosaic"
import Tail_banner_image from "../components/banners/tail_banner"
import Buttons from "../components/buttons/buttons"

import CardsRow from "../components/cards/cards_row"

const cards = [
    {title: 'Extreme adventures', text: `Those adventures are made to be thrilling and full of 
        dangers. Only the most experimented avdenturers survive . 
        Explore beautiful but deadly landscapes.`, img:'/level_2.png'},

    {title: 'Mild adventures', text: `While still challenging , those are meant to be fun and 
        full of surprises . Test your skills and brave moderate challenges.` , img:'/level_1.png'},

    {title: 'Fun adventures', text: `Those adventures are fun , easy and you can even bring your 
        family. This is meant as an introductory tier for those you are inexperimented or 
        simply don't enjoy the thrill.` , img:'/level_0.png'}
]
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
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
           
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

    <Buttons buttons={[{text: 'Helicopter drops', href: '/transport'},
                       {text: 'Sign up for free', href: '/sign_up'}
    ]} 
    bgColor="white" color="black" bgColor2="black" color2="white"
    rowColor="rgb(71, 171, 234)" 
    hoverColor={'white'}
    hoverBgColor="rgb(67, 33, 169)"
    paddingStart={5}/>


    <Banner text="Venture into uncharted territories" color="rgb(237, 241, 249)" 
    bgColor="rgb(49, 138, 221)" fontSize="txt_xl" height="x-large" bgImg="/b_banner.png"
    fontFam="'Permanent Marker', cursive"></Banner>

  
  
    <TabbedImages images={tabbed_images} rowColor="rgb(39, 118, 236)" shape="round"/>


    <Banner text="Pick your adventure" fontSize="txt_xl" height="large"
    bgColor="rgba(62, 176, 225, 0.7)" color="rgb(255, 255, 255)" shape="round-right"
    fontFam='"Ubuntu", sans-serif;'/>
    
    <CardsRow cards={cards} cardBg="rgba(3, 5, 8, 0.39)" color="white" cardGlow="rgb(0, 0, 0)"
    rowColor="rgba(46, 127, 233, 0.91)" cardBorders="rgb(255, 255, 255)"/>

    <Buttons buttons={[{text: 'Explore our tiers', href: '/tiers'}]}
    bgColor="white" color="black" bgColor2="black" color2="white"
    rowColor="rgb(78, 181, 225)" 
    hoverColor={'white'}
    hoverBgColor="rgb(67, 33, 169)"
    paddingStart={2}/>


    <Tail_banner_image text={'Book your adventure today . Are you ready adventurer ?'} 
    height="large" fontSize="txt_sm_wide" bgColor="rgb(80, 134, 214)"
    link={{'href': '/', 'word': 'today'}}/>
  
       </>

      
    )
}