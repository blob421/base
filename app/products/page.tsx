"use client"
import Stacked_cards from "../components/cards/stacked_cards"
import Dropdown_text_img from "../components/text_and_image/dropdown_text_img"
import Banner from "../components/banners/banner"
export default function Products(){

  const options = [
    
    {img: '/dropdown_text_img_0.jpg', name: 'Some option A',
                       txt: `Weather river cloud animal star? Window plate phone, 
                       apple fruit spoon watch heavy dream understand. 
                       Phone sun star watch field. Small water sand love notebook? 
                       Animal old lie drink, weather apple long break write warm! 
                       Love warm light furniture earth star. Laugh fast, star think 
                       tree fresh understand pen heavy, eat furniture open. Weather heavy loud 
                       sweet sun river eat, pen. Low lie salt draw roof, rain drink star old slow
                        understand, light search fruit.`},

    {img: '/dropdown_text_img_1.jpg',  name: 'Some option B',
                       txt: `Weather river cloud animal star? Window plate phone, 
                       apple fruit spoon watch heavy dream understand. 
                       Phone sun star watch field. Small water sand love notebook? 
                       Animal old lie drink, weather apple long break write warm! 
                       Love warm light furniture earth star. Laugh fast, star think 
                       tree fresh understand pen heavy, eat furniture open. Weather heavy loud 
                       sweet sun river eat, pen. Low lie salt draw roof, rain drink star old slow
                        understand, light search fruit.`}

   ]
  return (
    <>

    <Banner text="Always an amazing selection of products" bgColor="rgb(240, 248, 250)"/>
      <div className="row p-4 d-flex justify-content-center stacked_cards_row mb-3">
        <Stacked_cards/>
      </div>

      <Dropdown_text_img options={options}/>
    </>
  )
}