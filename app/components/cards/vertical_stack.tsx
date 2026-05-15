import {useState, useEffect} from "react"


type VerticalStack = {
  cards: {title:string, content:string}[], bgColor?:string, bgColor2?:string, color?:string 
}

export default function Stacked_cards({cards, bgColor, bgColor2, color}:VerticalStack){
    
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
        <div className="col-md-4 col-11 stacked_cards_main mb-4">

           <div className={slideChanged ? "card_top fadout_card ": "card_top"}
                style={{backgroundColor: bgColor? bgColor: 'white',
                          color: color? color: 'black',
                          border: color? `1px solid ${color}` : '1px solid black'
                  }}
           >

                <div className="title_card txt_lg"
                style={{borderBottom: color? `1px solid ${color}`: '1px solid black'}}>
                    {!slideChanged && cards[currentSlide].title}
                </div>
                <div className="stacked_cards_main_content txt_sm p-4"
               >
                    {!slideChanged && cards[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards"
                 style={{borderTop: color? `1px solid ${color}`: '1px solid black'}}>

                     <img src={"/left_arrow.png"} className="arrow_left_cards" 
                     onClick={() => arrowHandler('left')}/>
                     <img src={"/right_arrow.png"} className="arrow_right_cards"
                     onClick={() => arrowHandler('right')}/>
                </div>

           </div>

           <div className={slideChanged ? "card_middle flipped_middle": "card_middle"}
            style={{backgroundColor: bgColor2? bgColor2: '#f1f9fe',
                    color: color? color: 'black',
                    border: color? `1px solid ${color}` : '1px solid black'
            }}>
                    <div className="title_card txt_lg"
                     style={{borderBottom: color? `1px solid ${color}`: '1px solid black'}}>
                           {slideChanged && cards[currentSlide].title}
                    </div>
                      <div className="stacked_cards_main_content txt_sm p-4">
                    {slideChanged && cards[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards"
                style={{borderTop: color? `1px solid ${color}`: '1px solid black'}}>

                  
                </div>

           </div>
        </div>



        </>
    )
}