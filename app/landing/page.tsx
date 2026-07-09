
import FullSizeImgHeroTxt from "../components/text_and_image/full_size_img_hero_text"
import Tail_banner_image from "../components/banners/banner_image"

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

    return (
        <>
         <FullSizeImgHeroTxt bgImg="/july_gen_7.png" products={products}/>
         <Tail_banner_image text="Don't miss our last updates on products" 
         fontSize="txt_md" bgColor="rgb(84, 122, 192)" color="white"/>
        </>
    )
}