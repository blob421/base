import Big_image from "../components/images/big_image"
import Text_Round from "../components/text/rounded_edges"
import ImageMosaic from "../components/images/mosaic"
import Spacer from "../components/spacer"
export default function Images(){
const mosaic_images = ['avatar.png',
    'avatar.png','avatar.png','avatar.png', 'avatar.png']
    return (
        <>
       
           <Big_image image="/img0.png"/>
           <Spacer h={13}/>
           <ImageMosaic images={mosaic_images}/>
           <Spacer h={53}/>
        </>
    )
}