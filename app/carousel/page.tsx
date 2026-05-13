import CarouselArc from "../components/carousel/arc"

const images = ['tall0.jpg', 'tall1.jpg', 'tall3.jpg' , 
    'tall3.jpg' , 'tall3.jpg']

export default function Carousel(){
    return (
        <>
        <CarouselArc images={images}/>
        </>
    )
}