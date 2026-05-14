import CarouselArc from "../components/carousel/arc"
import Spacer from "../components/spacer"

const images = ['tall0.jpg', 'tall1.jpg', 'tall3.jpg' , 
    'tall3.jpg' , 'tall3.jpg']

export default function Carousel(){
    return (
        <>
         <Spacer h={20}/>
        <CarouselArc images={images} style="circle"/>
          <Spacer h={20}/>
        </>
    )
}