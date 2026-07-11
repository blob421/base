import BgImage from "../components/images/BgImage"
import { HeroTextVar } from "../components/text/hero_text_variant"
import Reviews from "../components/text_and_image/reviews_component"
import Text_left_img_right from "../components/text_and_image/separated"
import Spacer from "../components/spacer"
import Banner from "../components/banners/banner"
import Tail_banner_image from "../components/banners/banner_image"
import GrowingBanner from "../components/banners/growing_banner"

const subHeaders = ['Lightning fast deliveries', 'Support available at any time']
const rev = [{name: 'blob', picture: '/avatar.png', title: 'Nice review', 
    content:'Very nice company, blob was very comprehensive and helpful', rating:5},

{name: 'Anon user 123', picture: '/avatar.png', title: 'Very impressed', 
    content:'Very nice company, blob was very comprehensive and helpful', rating:3}

]
const text = `The city is our playground. Our drivers are trained to memorize every postal 
addresses in their districts.
We deliver any goods anywhere without incuring delays. We hire ninjas and navigation specialists to ensure even the
riskiest deliveries are taken care of`
export default function Landing2(){
    return (
        <>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montenegrin+Gothic+One&display=swap');
            

        </style>

       
        <BgImage img="/july_gen_39.png" imgMob="/july_gen_39_mob.png"/>
        <HeroTextVar header="City network , logistics agency" subHeaders={subHeaders}/>
        <Spacer h={30}></Spacer>
        <Banner text="Our mission" bgColor="none" color="white" fontSize="txt_xl" 
        height="large" />
        <Text_left_img_right image="/image_landing2.jpg" text={text} displaced={false}
        BgColor="rgba(255, 255, 255, 0.85)"/>

        <GrowingBanner text="Customer satisfaction is our priority" color="white" 
        bgColor="rgba(68, 64, 145, 0.75);"
        fontSize="txt_md_wide" height="large"/>
    
        <Reviews reviews={rev} bgColor="rgba(0, 60, 255, 0.443);"/>
        <Spacer h={11}/>
        <Tail_banner_image text="What are you waiting for ? Subscribe to get the best delivery services available"
        fontSize="txt_sm" height="large"/>
        </>
    )
} 