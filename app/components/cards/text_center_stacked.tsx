import {useState} from "react"

import type {text_center_stacked_props} from "../0_required_base/types"
export default function Text_center_stacked({cards}:text_center_stacked_props){
    const [current_idx, setCurrentIdx] = useState(0)
    const [animationTriggered, setAnimationTriggered] = useState(false)

    const handle_arrows = (direction:string) =>{
      setAnimationTriggered(true)
        setTimeout(() => {

      setAnimationTriggered(false)
          if (direction == 'up'){
         current_idx == 0 ? setCurrentIdx(cards.length - 1) : setCurrentIdx(current_idx - 1)
      }else{
         current_idx == cards.length - 1 ? setCurrentIdx(0) : setCurrentIdx(current_idx + 1)
      }
    
    
    }, 700)

 
    }
    return (
        <div className="row d-flex justify-content-center text_center_stacked_row">
             
              <div className="col-11 col-lg-6 text_center_stacked_container">
                   <div className={!animationTriggered ? "text_center_stacked_card_top"
                                                       : "text_center_stacked_card_top invisible_card"
                   }>
                    <h1 className="txt_xl">{cards[current_idx].title && cards[current_idx].title}</h1>
                    <div className="txt_sm">
 {cards[current_idx].content}
                    </div>
                   
                   </div>
                    <div className="text_center_stacked_card_bot">
                    
                   </div>

                   <div className="arrows_cont_text_center_stacked">
                      <img src={"/arrow_up.png"} className="text_center_stacked_arrows"
                      onClick={()=> handle_arrows('up')}/>
                      <img src={"/arrow_down.png"} className="text_center_stacked_arrows"
                      onClick={()=> handle_arrows('down')}/>
                   </div>
              </div>
        
        </div>
    )
}