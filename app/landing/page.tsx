

import Tail_banner_image from "../components/banners/tail_banner"
import HeroText from "../components/text/hero_text"
import BgImage from "../components/images/BgImage"
import Banner from "../components/banners/banner"
import StackedCardsCarousel from "../components/carousel/product_carousel"
import InfoBanner from "../components/banners/info_banner"
import Spacer from "../components/spacer"
import Buttons from "../components/buttons/buttons"


export default function Landing(){
    const products = [

    {
    name: 'Purificator 3000 ultra MAX', img: '/w_p_0.webp',
    description: `This model is the cream of the cream . Featuring the lastest 
                    technologically available water particle atomizer , you get the 
                    freshest and cleanest water . Destroying dirt at the molecular 
                    level is a piece of cake for this top tier machine. `,

    features: ['Award winner of the water exterminator 2025 contest',
               'The cap is fully removable for convenience',
               'Fined grained control: download the app for remote control'
               ]
    },


    {
    name: 'Condensator 2000 slim', img: '/w_p_1.jpg', 

    description: `While not the most expensive of our model , the condensator slim still benefits
                    from the latest technologies in matter of water atomization and is covered 
                    for life. It's slim design is more suited for small drinkers and water 
                    enthusiasts`,

    features: ['Award winner of the slimest water purifier',
               'Very slim and convenient',
               'Ajustable presets from factory'
               ]
    }
    ]
    const hero_subhaders = ['Our water atomizer are the best in the market', 
                            'A single droplet is all you need']

    const hero_head = "A+ rated water purifiers"

    const callToAction = `In 2026 , water purifiers are a must have for every families. 
                 If you don't have one , you risk ingesting crap and you don't want that , 
                 make the right move and keep your loved one safe .
                 Our models are tested and prooved and the best in the market.`
    return (
        <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap');
            
        </style>
         <BgImage img="/july_gen_7.png" imgMob="/july_gen_7_mob.png"/>
      
         <HeroText header={hero_head} subHeaders={hero_subhaders} 
         callToAction={callToAction} colorDelimiters={['make', 'move', "tested", "best"]} 
         delColor="orange"/>
      
         <Buttons buttons={[{text: 'Family deals', href: '/'}, {text: 'Our selection', href: '/'}]} 
         color="white" bgColor="blue" color2="white" bgColor2="black"
         hoverBgColor="purple" hoverColor="white" paddingStart={5}/>
         <Spacer h={10}/>

         <Banner text="Always a huge selection" bgColor="rgb(248, 241, 223)" color="rgb(107, 76, 39)"
         fontSize="txt_xl" height="large" border="rgb(255, 255, 255)"
         fontFam='"Bevan", serif'/>

         <StackedCardsCarousel products={products} cardsBgColor="rgba(0, 0, 0, 0.43)"
         cardsColor="white" borderImg="black" rowColor="white" outline="rgb(161, 120, 86);"/>
         <Tail_banner_image text="Don't miss our last updates on products" 
         fontSize="txt_sm" bgColor="rgb(84, 122, 192)" color="white"/>
        </>
    )
}