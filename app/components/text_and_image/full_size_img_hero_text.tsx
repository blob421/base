'use client'

type props = {
    bgImg: string, products: {img:string, name:string, description:string, features: string[]}[]
}
import { useState, useEffect } from "react"

export default function FullSizeImgHeroTxt({bgImg, products}:props){

    const [cP , setCp] = useState(0)


    const alternateCp = (direction:string) => {

        direction == 'left' ? setCp(((cP - 1) + products.length) % products.length)
                            : setCp((cP + 1) % products.length)


    }

    return (
        <>
         <style>
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
      </style>

         <img src={bgImg} className="g-0 img_full_hero_txt w-100"/>


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

        <div className="row pt-5 mt-5">

           <h1 className="txt_xl text-center header_products p-2">Always a huge selection</h1>
        </div>


        <div className="product_row row p-0 m-0 pt-3 pb-0 ps-2">
            
               
                <div className="col-md-6 pt-3 mt-5 position-relative d-flex justify-content-center">



                    <div className="products_carousel w-75 h-100">

                        <div className="top_img w-100">
            

                                <img src={products.at(cP)?.img} className="img_carousel_top"/>
                        </div>

                        <div className="next_img w-100 d-flex justify-content-end">
                                <div className="arrow_div d-flex 
                                flex-column h-100 align-items-end gap-2 p-2">
                                    <img src={'/arrow_up.png'} onClick={()=> alternateCp('left')}/>
                                    <img src={'/arrow_down.png'} onClick={()=> alternateCp('right')}/>
                                </div>                             
                            <img src={products.at((cP + 1) % products.length)?.img} className="img_carousel"/>
                        </div>
                        
                    </div>

                </div>

                <div className="col-md-6 p-2 pt-5 h-100 d-flex mt-5
                align-items-center justify-content-start gap-2 flex-column">


                   

                    <div className="product_text p-4 txt_xl w-75">
                        
                        <h1 className="txt_lg product_title">
                            {products.at(cP)?.name}
                        </h1>
                        <div className="product_description txt_md">
                            {products.at(cP)?.description}
                        </div>

                       
                    </div>
                    <div className="product_text_2 p-4 txt_xl w-75">
                        
                        <h1 className="txt_lg product_title">
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