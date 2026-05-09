
"use client"

import Stacked_cards from "../components/cards/vertical_stack"
import Text1 from "../components/text/rounded_edges"
import Text2 from "../components/cards/horizontal_stack"
import Text_tabs from "../components/cards/tabbed_cards"

const slides = [

        {title: "This is the first slide" , content: "First slide content"},
        {title: "This is the second slide" , content: "Second slide content"},
        {title: "This is the 3 slide" , content: "3 slide content"},

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
            <Stacked_cards cards={slides} color="white" bgColor="grey" bgColor2="black"/>
            <Text1 text={text}/>
        </div>

        <Text2 cards={slides} bgColor='rgb(0,0,0)' color="white" bgColor2='lightgrey'/>
        <div style={{height:'5vh'}}></div>
        <Text_tabs cards={slides} bgColor="rgb(255, 255, 255)" 
                                  bgColor2="rgb(199, 199, 199)"
                                  color="rgb(55, 50, 44)"
                                  tabs={[{text: '1', color: 'white'}, 
                                    {text: '2', color: 'rgb(144, 144, 144)'}, 
                                    {text: '3', color: 'lightgrey'}]}
                                  />
      </> 
    )
}