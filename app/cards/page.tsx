
"use client"

import Stacked_cards from "../components/cards/stacked_cards"
import Text1 from "../components/text/rounded_edges"
import Text2 from "../components/cards/text_center_stacked"


const slides = [

        {title: "This is the first slide" , content: "First slide content"},
        {title: "This is the second slide" , content: "Second slide content"},

     ]

const text = `Weather river cloud animal star? Window plate phone, apple fruit spoon watch 
heavy dream understand. Phone sun star watch field. Small water sand love notebook? Animal old 
lie drink, weather apple long break write warm! Love warm light furniture earth star. Laugh fast,
star think tree fresh understand pen heavy, eat furniture open. Weather heavy loud sweet 
sun river eat, pen. Low lie salt draw roof, rain drink star old slow understand, light 
search fruit.

Beautiful read drink field, door work big dirty light loud, grass draw? Tasty watch wind lie 
watch? Furniture moon cup light bright watch door spoon field, listen. Watch sky, read sweet 
run fly old? Furniture high watch, fly low room chair wind forest talk pencil? Window sit door, 
earth room watch cup mountain? Watch dirty, sand high earth short sit listen! Beautiful sky 
bread cold, hide ugly fruit water, star sea pear path talk rain.`


export default function Cards(){

    return (
    <>
        <div className="row d-flex justify-content-center mt-4">
            <Stacked_cards cards={slides}/>
            <Text1 text={text}/>
        </div>

        <Text2 cards={slides}/>
      </> 
    )
}