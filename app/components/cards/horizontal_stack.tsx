import {useState} from "react"


type HorizontalStack = {
  cards: {title:string, content:string}[], bgColor?:string, bgColor2?:string, color?:string 
}


export default function Text_center_stacked({cards, bgColor, bgColor2, color}:HorizontalStack){
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
                                                       : "text_center_stacked_card_top invisible_card"}
                        style={{backgroundColor: bgColor? bgColor : 'aliceblue' ,
                                border: color? `1px solid ${color}` : '1px solid black',
                                color: color? color : 'black'
                        }}
                   >
                    <h1 className="txt_xl">{cards[current_idx].title && cards[current_idx].title}</h1>
                    <div className="txt_md" style={{marginTop: '2vh'}}>
 {cards[current_idx].content}
                    </div>
                   
                   </div>
                    <div className="text_center_stacked_card_bot" 
                         style={{backgroundColor: bgColor2? bgColor2: 'grey',
                                 border: color? `1px solid ${color}` : '1px solid black',
                          }}>
                    
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