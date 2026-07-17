'use client'
        
type props = {
    products: {img:string, name:string, description:string, features: string[]}[]
    cardsColor?: string, cardsBgColor?: string, borderCards?: string, 
    borderImg?:string, rowColor?: string, outline?: string
}

import { useState, useEffect } from "react"

export default function StackedCardsCarousel({products, cardsBgColor, cardsColor, borderImg,
     borderCards, rowColor, outline
}:props){

        
    const [cP , setCp] = useState(0)


    const alternateCp = (direction:string) => {

        direction == 'left' ? setCp(((cP - 1) + products.length) % products.length)
                            : setCp((cP + 1) % products.length)


    }
    return (
        <>

        <div className="row m-0 pt-5 pb-3 pb-sm-5 p-lg-5 pb-lg-0 d-flex justify-content-center 
                                                     justify-content-lg-end" 
        style={{backgroundColor: rowColor ? rowColor : 'none', 
              borderTop: `2px solid ${borderImg}`}}>
                           <div className="nav_car col-12 pe-md-5 me-md-1 col-sm-10 col-lg-6 g-0 d-flex justify-content-center
                           align-items-center txt_lg_wide">
                            
                                <div className="arrow_div d-flex gap-sm-2 gap-md-3
                                     h-100 align-items-center gap-2 p-2">
                                    <img src={'/left_arrow.png'} onClick={()=> alternateCp('left')}/>
                                     <div className="text-left ps-3 ps-md-0 product_car_text_between">{products.at(cP)?.name}</div>
                                    <img src={'/right_arrow.png'} onClick={()=> alternateCp('right')}/>
                                </div>                        
                   </div>
        </div>
        <div className="product_row row p-0 m-0 pt-lg-1 pb-5 pb-sm-5 ps-md-2 
        justify-content-center pt-xxl-5 mt-xxl-5" style={{backgroundColor: rowColor? rowColor : 'none'}}>
            
            
                <div className="g-0 col-11 col-md-5 pt-5 pt-sm-3 p-md-5 mt-md-5 mt-md-3 pb-5 pb-sm-4 
                pb-sm-5 pb-md-2 pt-md-3 pb-md-0 pb-xxl-5 mb-xxl-5
                d-flex justify-content-center align-content-md-start">

    

                    <div className="products_carousel">

                        <div className="top_img_cont">
                      
                                <img src={products.at(cP)?.img} className="img_carousel_top"
                                style={{border: `2px solid ${borderImg? borderImg : 'black'}`,
                                outline: `8px solid ${outline?? 'black'}`}}/>
                    
                        </div>
                                
                        
                            <img src={products.at((cP + 1) % products.length)?.img} className="img_carousel"
                            style={{border: `2px solid ${borderImg? borderImg : 'black'}`,
                            outline: `8px solid ${outline?? 'black'}`}}/>
                    
                        
                    </div>

                </div>

                <div className="col-md-6 p-0 p-md-5 pt-5 h-100 d-flex mt-md-5
                align-items-center justify-content-start product_car_cards_col
                gap-4 gap-md-2 flex-column gap-xxl-5"
                >


                

                    <div className="product_text p-4 pb-5 pb-md-4 mb-1 mb-sm-4 mb-md-2 p-xxl-5"
                    style={{backgroundColor: cardsBgColor? cardsBgColor: 'white',
                            color: cardsColor? cardsColor : 'black'
                    }}>
                        
                        <h1 className="txt_lg product_title pb-3 pb-md-0">
                            {products.at(cP)?.name}
                        </h1>
                        <div className="product_description pt-2 txt_md">
                            {products.at(cP)?.description}
                        </div>

                    
                    </div>
                    
                    <div className="product_text_2 p-4 p-xxl-5 txt_xl"
                    style={{backgroundColor: cardsBgColor? cardsBgColor: 'white',
                            color: cardsColor? cardsColor : 'black'
                    }}>
                        
                        <h1 className="txt_lg product_title pb-3 pb-md-0">
                            Features
                        </h1>
                        <div className="product_description pt-2 txt_md">
                        
                                {products.at(cP)?.features.map((f, idx)=> {
                                    return (
                                        <div key={idx}>
                                            {f}
                                        </div>
                                    )
                                })}
                        
                        </div>

                    
                    </div>
                </div>
        </div>

        </>
    )
}