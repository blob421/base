'use client'

type props = {
    img: string
}
import { useState, useEffect } from "react"

export default function FullSizeImgHeroTxt({img}:props){

    const images = ['/w_p_0.webp', '/w_p_1.jpg']
    const [cP , setCp] = useState(0)

    const alternateCp = (direction:string) => {

        direction == 'left' ? setCp((cP - 1) + images.length % images.length)
                            : setCp((cP + 1) + images.length % images.length)

    }

    return (
        <>
         <img src={img} className="g-0 img_full_hero_txt w-100"/>


          <div className="row p-0 m-0 row_full_size_img_hero_txt h-100 w-100 mb-4 pt-3">

            <div className="col-12 col-md-6 hero_txt_full h-100 g-0">

                <div className="p-4 text_container mb-3">

                    
                        <div className="text_0 txt_xl">
                            A+ rated water purifiers
                        </div>
                        <div>
                            Our water atomizer are the best in the market 
                        </div>
                        <div>
                            A single droplet is all you need 
                        </div>
                  </div>

                
              
            </div>
            < div className="col-12 col-md-6 p-5 pt-5">
               <div className="text_right">
                 In 2026 , water purifiers are a must have for every families. 
                 If you don't have one , you risk ingesting crap and you don't want that , 
                 <span style={{color:'orange'}}> make the right move </span>and keep your loved one safe .
                 Our models are tested and prooved and the best in the market.  
               </div>
            </div>

        </div>

        <div className="product_row row p-0 m-0 pt-5 pb-5 h-100">
               <h1 className="txt_xl text-center header_products p-2">Our models selection</h1>
               
                <div className="col-md-6 pt-5 position-relative">

                  <div className="arrow_div d-flex flex-column h-100 p-2">
                        <img src={'/arrow_up.png'}/>
                        <img src={'/arrow_down.png'}/>
                    </div>

                    <div className="products_carousel w-75 h-100">

                        <div className="top_img w-100">
                            <img src={images.at(cP)} className="img_carousel_top"/>
                        </div>

                        <div className="next_img w-100 d-flex justify-content-end">
                            <img src={images.at((cP + 1) + images.length % images.length)} className="img_carousel"/>
                        </div>
                        
                    </div>

                </div>

                <div className="col-md-6 p-2 pt-5 h-100 d-flex 
                align-items-start justify-content-start gap-2 flex-column">


                   

                    <div className="product_text p-4 txt_xl w-75">
                        
                        <h1 className="txt_lg product_title">
                            Purificator 3000 ultra max
                        </h1>
                        <div className="product_description txt_md">
                            This model is the cream of the cream . Featuring the lastest 
                            technologically available water particle atomizer , you get the 
                            freshest and cleanest water . Destroying dirt at the molecular 
                            level is a piece of cake for this top tier machine. 
                        </div>

                       
                    </div>
                    <div className="product_text_2 p-4 txt_xl w-75">
                        
                        <h1 className="txt_lg product_title">
                            Features
                        </h1>
                        <div className="product_description txt_md">
                            <ul>
                                <li>Award winner of the water exterminator 2025 contest</li>
                                <li>The cap is fully removable for convenience</li>
                                <li>Fined grained control: download the app for remote control</li>
                            </ul>
                        </div>

                       
                    </div>
                </div>
        </div>

        </>
    )
}