'use client'
        
type props = {
    products: {img:string, name:string, description:string, features: string[]}[]
}

import { useState, useEffect } from "react"

export default function StackedCardsCarousel({products}:props){

        
            const [cP , setCp] = useState(0)
        
        
            const alternateCp = (direction:string) => {
        
                direction == 'left' ? setCp(((cP - 1) + products.length) % products.length)
                                    : setCp((cP + 1) % products.length)
        
        
            }
            return (
                <>
        
        
                <div className="product_row row p-0 m-0 pt-3 pb-3 pb-sm-5 ps-md-2 justify-content-center">
                    
                       
                        <div className=" g-0 col-11 col-md-6 pt-3 p-md-5 mt-md-3 mt-md-3 pb-4 
                        pb-sm-5 pb-md-0 
                        d-flex justify-content-center align-content-md-start">
        
        
        
                            <div className="products_carousel">
        
                                  <div className="top_img_cont">
                                            <div className="arrow_div d-flex 
                                             flex-column h-100 align-items-end gap-2 p-2">
                                            <img src={'/arrow_up.png'} onClick={()=> alternateCp('left')}/>
                                            <img src={'/arrow_down.png'} onClick={()=> alternateCp('right')}/>
                                        </div>         
        
                                        <img src={products.at(cP)?.img} className="img_carousel_top"/>
                             
                                  </div>
                                        
                                  
                                    <img src={products.at((cP + 1) % products.length)?.img} className="img_carousel"/>
                              
                                
                            </div>
        
                        </div>
        
                        <div className="col-md-6 p-0 p-md-5 pt-5 h-100 d-flex mt-md-5
                        align-items-center justify-content-start product_car_cards_col
                        gap-4 gap-md-2 flex-column">
        
        
                           
        
                            <div className="product_text p-4 pb-5 pb-md-4 mb-1 mb-sm-4 mb-md-2">
                                
                                <h1 className="txt_lg product_title pb-3 pb-md-0">
                                    {products.at(cP)?.name}
                                </h1>
                                <div className="product_description txt_md">
                                    {products.at(cP)?.description}
                                </div>
        
                               
                            </div>
                            <div className="product_text_2 p-4 txt_xl">
                                
                                <h1 className="txt_lg product_title pb-3 pb-md-0">
                                    Features
                                </h1>
                                <div className="product_description txt_md">
                                  
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