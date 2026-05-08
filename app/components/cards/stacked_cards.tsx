import {useState, useEffect} from "react"
import type { Cards } from "../0_required_base/types"



export default function Stacked_cards({cards}:Cards){
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideChanged, toggleSlideChanged] = useState(false)


    const arrowHandler = (direction:string) => {

      toggleSlideChanged(true)

      if (direction == 'right'){
            
             currentSlide + 1 == cards.length ? setCurrentSlide(0)
                                                : setCurrentSlide(currentSlide + 1)
      }

      else{
             currentSlide == 0 ? setCurrentSlide(cards.length - 1)
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
      <>
        <div className="col-lg-4 col-xxl-5 stacked_cards_main mb-4">

           <div className={slideChanged ? "card_top fadout_card ": "card_top"}>

                <div className="title_card txt_lg">
                    {!slideChanged && cards[currentSlide].title}
                </div>
                <div className="stacked_cards_main_content txt_md">
                    {!slideChanged && cards[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards">

                     <img src={"/left_arrow.png"} className="arrow_left_cards" 
                     onClick={() => arrowHandler('left')}/>
                     <img src={"/right_arrow.png"} className="arrow_right_cards"
                     onClick={() => arrowHandler('right')}/>
                </div>

           </div>

           <div className={slideChanged ? "card_middle flipped_middle": "card_middle"}>
                    <div className="title_card txt_lg">
                           {slideChanged && cards[currentSlide].title}
                    </div>
                      <div className="stacked_cards_main_content txt_md">
                    {slideChanged && cards[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards">

                  
                </div>

           </div>
        </div>



        </>
    )
}