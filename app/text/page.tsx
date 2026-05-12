import SlideInText from "../components/text/slide_text_top_prev_elem"
import Dropdown_text_img from "../components/text_and_image/tabbed_banner"
import Text_left_img_right from "../components/text_and_image/separated"

import TextImageBanner from "../components/text_and_image/banner"
import { sample } from "lodash"
import Text_centered from "../components/text/text_block_center"
import TextBlocks from "../components/cards/option_blocks"
import Spacer from "../components/spacer"

const text_sample = `"Lorem ipsum" is the standard dummy text used in printing and design to fill spaces 
in layouts to focus on visual design rather than content. It is a scrambled version of Latin from 
Cicero, used since the 14th century, or can be generated in tools like Word using =rand().`


export default function Text(){

    return (
        <>
        <div style={{height: '3vh'}}></div>
      <Text_left_img_right text={text_sample} image="/img0.png" imagePosition="right-top" displaced={true}
      textHeight="full" BgColor="antiquewhite" />
 <div style={{height: '5vh'}}></div>
      <Dropdown_text_img options={[{img: '/img0.png', txt: text_sample, name: 'test'}, 
                                   {img: '/img1.png', txt: text_sample, name: 'Only the best'}]}
                                   />

        <div style={{backgroundColor: 'black', height: '18vh'}}></div>
         <SlideInText text="Woow I am sliding at the top of this div...." color="white"/>
        <TextImageBanner text={text_sample} image="/img0.png" imgPosition="left" imgMargin={false}/>
       
         <Spacer h={9}/>

          <Spacer h={4}/>
        <Text_centered text={text_sample + text_sample} bgColor="antiquewhite"/>
            <Spacer h={7}/>

            <TextBlocks color="black" blocks={[{title: 'Option A', 
            content: text_sample},
                {title: 'This is a test', content: text_sample}, 
                {title: 'This is a test', content: 'again'},
                {title: 'This is a test', content: 'again'}]} bgColor="antiquewhite"
                footers={[{button:false, text: '* This is the best option in this case'}, 
                           {button:true, text: 'explore'}
                          ,{button:true, text: 'explore'},{button:true, text: 'explore'}
                ]}
                selectionColor="rgba(35, 96, 158, 0.72)"/>

        </>
    )
}