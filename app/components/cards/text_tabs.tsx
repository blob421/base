"use client"
import {useState} from "react"
import type { text_center_stacked_props } from "../0_required_base/types"

export default function Text_tabs({cards}:text_center_stacked_props){
   const [tabIndex, setTabIndex] = useState(0)
   const tabs = [{color: 'salmon', idx:'A'}, {color:'lightblue', idx:'B'}, 
    {color: 'lightgreen', idx: 'C'}, {color: 'yellow', idx: 'D'}, {color: 'orange', idx: 'E'}]

   return (
     <div className="row d-flex justify-content-center text_tabs_row">
         <div className="col-11 col-lg-6 text_tabs_main">
              <div className="text_tabs_card_top">
                <h1 className="txt_xl">{cards[tabIndex].title}</h1>
                <div className="text_tabs_content txt_sm">
                 {cards[tabIndex].content}
                </div>
          
              </div>
              <div className="text_tabs_card_bot">
            
                        {cards && cards.map((c, idx) => {
                            return (
                                <div key={idx} className={
                                    tabIndex !== idx ? "text_tabs_tabs": "text_tabs_big_tab"} 
                                style={{backgroundColor: tabs[idx].color}}
                                onClick={() => setTabIndex(idx)}>
                                    <span className="txt_xs">{tabs[idx].idx}</span>
                                </div>
                            )
                        })}
          
              </div>

         </div>
     </div>
   )
}