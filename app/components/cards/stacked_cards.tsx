import {useState, useEffect} from "react"

export default function Stacked_cards(){
    

    const slides = [
        {title: "This is the first slide" , content: "First slide content"},
        {title: "This is the second slide" , content: "Second slide content"},

     ]
    const [currentSlide, setCurrentSlide] = useState(0)
   
    const [slideChanged, toggleSlideChanged] = useState(false)

    const arrowHandler = (direction:string) => {

      toggleSlideChanged(true)

      if (direction == 'right'){
            
             currentSlide + 1 == slides.length ? setCurrentSlide(0)
                                                : setCurrentSlide(currentSlide + 1)
      }

      else{
             currentSlide == 0 ? setCurrentSlide(slides.length - 1)
                                                : setCurrentSlide(currentSlide - 1)
      }  
    }
 

useEffect(() => {
  if (slideChanged) {
    const timer = setTimeout(() => {
      toggleSlideChanged(false)
    }, 500)

    return () => clearTimeout(timer)
  }
}, [slideChanged])


    return (
        <div className="col-lg-4 stacked_cards_main">

           <div className={slideChanged ? "card_top fadout_card ": "card_top"}>

                <div className="title_card">
                    {!slideChanged && slides[currentSlide].title}
                </div>
                <div className="stacked_cards_main_content">
                    {!slideChanged && slides[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards">

                     <img src={"/left_arrow.png"} className="arrow_left_cards" 
                     onClick={() => arrowHandler('left')}/>
                     <img src={"/right_arrow.png"} className="arrow_right_cards"
                     onClick={() => arrowHandler('right')}/>
                </div>

           </div>

           <div className={slideChanged ? "card_middle flipped_middle": "card_middle"}>
                    <div className="title_card">
                           {slideChanged && slides[currentSlide].title}
                    </div>
                      <div className="stacked_cards_main_content">
                    {slideChanged && slides[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards">

                  
                </div>

           </div>
        </div>
    )
}