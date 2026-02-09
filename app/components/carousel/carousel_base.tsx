"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react'


export type Image = {
  url: string
}

type CarouselProps = {
  images: Image[], postId? : string, big?: boolean
}

export default function Carousel_base({ images, postId, big }: CarouselProps) {
      const [enlarged, setEnlarged] = useState(false);

  return (
   
    <div id={"carousel"} className="carousel" data-bs-ride="carousel">
      {/* Indicators */}
          { images.length > 1 &&
      <ol className={postId ?"carousel-indicators": " carousel-indicators carousel_indicators_feed"}>
        {images.map((_, idx) => (
          <li
            key={idx}
            data-bs-target={'#carousel'}
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
}
      {/* Slides */}
      <div className={"carousel-inner"}>
        {images.map((image, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""} `}>
            <img className={big ? "d-block big_carousel_image": "d-block carousel_standard"} src={image.url} alt={`slide-${idx}`} id={`img_post_${idx}`}
            onClick={()=>{
               if (enlarged){
                setEnlarged(false)
               }else{
                console.log('triggered')
                setEnlarged(true)
               }
            
            } }/>
          </div>
        ))}
      </div>

 
    </div>


  )
}