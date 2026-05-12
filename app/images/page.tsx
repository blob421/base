import Big_image from "../components/images/big_image"
import Text_Round from "../components/text/rounded_edges"
import ImageMosaic from "../components/images/mosaic"
import Spacer from "../components/spacer"
import DualImage from "../components/text_and_image/dual_img_text"
const text_sample = `"Lorem ipsum" is the standard dummy text used in printing and design to fill spaces 
in layouts to focus on visual design rather than content. It is a scrambled version of Latin from 
Cicero, used since the 14th century, or can be generated in tools like Word using =rand().`

export default function Images(){
const mosaic_images = ['avatar.png',
    'avatar.png','avatar.png','avatar.png']

const dual_img_img = ['avatar.png', 'avatar.png']

    return (
        <>
       
           <Big_image image="/img0.png"/>
           <Spacer h={13}/>
           <ImageMosaic images={mosaic_images} size="big" style="round"/>
           <Spacer h={63}/>
           <DualImage images={['img0.png', 'img1.png']} imageRatio="16/9" text={text_sample}/>
           <Spacer h={53}/>
        </> 
    )
}