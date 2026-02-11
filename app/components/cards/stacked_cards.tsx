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
      <>
        <div className="col-lg-4 stacked_cards_main">

           <div className={slideChanged ? "card_top fadout_card ": "card_top"}>

                <div className="title_card txt_lg">
                    {!slideChanged && slides[currentSlide].title}
                </div>
                <div className="stacked_cards_main_content txt_md">
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
                    <div className="title_card txt_lg">
                           {slideChanged && slides[currentSlide].title}
                    </div>
                      <div className="stacked_cards_main_content txt_md">
                    {slideChanged && slides[currentSlide].content}
                </div>
                <div className="arrows_stacked_cards">

                  
                </div>

           </div>
        </div>

        <div className="col-lg-7 stacked_cards_text pt-5 p-5 h-75 mt-4 txt_md">
            Weather river cloud animal star? Window plate phone, apple fruit spoon watch heavy dream understand. Phone sun star watch field. Small water sand love notebook? Animal old lie drink, weather apple long break write warm! Love warm light furniture earth star. Laugh fast, star think tree fresh understand pen heavy, eat furniture open. Weather heavy loud sweet sun river eat, pen. Low lie salt draw roof, rain drink star old slow understand, light search fruit.

Beautiful read drink field, door work big dirty light loud, grass draw? Tasty watch wind lie watch? Furniture moon cup light bright watch door spoon field, listen. Watch sky, read sweet run fly old? Furniture high watch, fly low room chair wind forest talk pencil? Window sit door, earth room watch cup mountain? Watch dirty, sand high earth short sit listen! Beautiful sky bread cold, hide ugly fruit water, star sea pear path talk rain.
        </div>

        </>
    )
}