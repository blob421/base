
type cards = {
    cards: {img:string, text:string, title:string}[], cardBg: string, cardGlow:string,
    color:string, rowColor?:string, cardBorders: string
}


export default function CardsRow({cards, color, cardBg, cardGlow, rowColor, cardBorders}: cards){

    const handleHover = (el:any, how: string) => {

        if (how == 'in'){
         el.style.border = `3px solid ${cardGlow}`
         el.style.transform = 'translateY(-4%)'
        }
        else {
          el.style.border = `3px solid ${cardBorders}`
          el.style.transform = 'translateY(0%)'
        }
       
    }


    return (
        <div className="row m-0 p-lg-2 pt-lg-5 pb-5 pb-lg-5 d-flex justify-content-center row_cards_row" 
        style={{backgroundColor: rowColor? rowColor : 'none'}}>

           {cards.map((c, idx) => {

            return (
                <div className="col-12 col-md-4 mb-4 mb-lg-0 col-cards-row" key={idx}>
                    <div className="cards_row_card p-3 p-sm-5 p-lg-3 d-flex flex-column" 
                    style={{backgroundColor: cardBg, color: color, border: `3px solid ${cardBorders}`}}
                    onMouseEnter={(event) => {handleHover(event.target, 'in')}}
                    onMouseLeave={(event) => {handleHover(event.target, 'out')}}>

                            <div className="cards_row_card_header d-flex ps-2 pt-3 pe-2">
                                <div className="cards_row_card_header_text txt_xl"
                               >
                                     {c.title}
                                </div>
                            

                                <img src={c.img} className="cards_row_card_img"/>

                            </div>

                            <div className="cards_row_card_body pt-4 mt-2 ps-2 pe-2 txt_md">
                                {c.text}

                            </div>
                    </div>
                     
                </div>
            )
           })}
        </div>
    )
}