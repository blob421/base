"use client"
import {useState} from "react"
import type { Cards } from "../0_required_base/types"

type TabbedSlides ={
    cards: {title:string, content:string}[], tabs: {color: string, text: string}[], 
    bgColor?: string, bgColor2?:string, color?:string, color2?: string
}
export default function Text_tabs({cards, bgColor, bgColor2, color, color2, tabs}:TabbedSlides){
   const [tabIndex, setTabIndex] = useState(0)

  


   return (
     <div className="row d-flex justify-content-center text_tabs_row">
         <div className="col-11 col-lg-6 text_tabs_main">

              <div className="text_tabs_card_top" 
                   style={{backgroundColor: bgColor? bgColor : 'aliceblue',
                           color: color? color : "black",
                           border: color? `1px solid ${color}`: '1px solid black'
                   }}>
               
                <h1 className="txt_xl">{cards[tabIndex].title}</h1>
                <div className="text_tabs_content txt_sm">
                 {cards[tabIndex].content}
                </div>
          
              </div>
              <div className="text_tabs_card_bot" 
              style={{backgroundColor: bgColor2? bgColor2: 'grey',
                      border: color? `1px solid ${color}`: '1px solid black'
              }}>
            
                        {cards && cards.map((c, idx) => {
                            return (
                                <div key={idx} className={
                                    tabIndex !== idx ? "text_tabs_tabs": "text_tabs_big_tab"} 
                                style={{backgroundColor: tabs[idx].color,
                                        color: color2? color2: 'black'
                                }}
                                onClick={() => setTabIndex(idx)}>
                                    <span className="txt_xs">{tabs[idx].text}</span>
                                </div>
                            )
                        })}
          
              </div>

         </div>
     </div>
   )
}