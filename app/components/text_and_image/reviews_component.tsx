'use client'
import { range } from "lodash"
import { useEffect, useState } from "react"

type review = {
    reviews: {title:string, content:string, rating:number, picture:string, name:string}[],
    bgColor: string
}



export default function Reviews({reviews, bgColor}:review){
    const [cI, setCi]= useState(0)

    useEffect(()=>{
      const int = window.setInterval(()=> {
          setCi(prev => (prev + 1) % reviews.length)

      }, 7000)

      return () => window.clearInterval(int)

    }, [])

    return(
     
      <div className="row m-0 ps-md-3 d-flex justify-content-center
      row_review_cards" >
       
          <div className="col-12 col-md-5 pe-md-3 ms-lg-5 col_review_cards d-flex justify-content-center">

             <div className="reviews_container">
             
             
                       <div className="reviews_head" style={{backgroundColor: bgColor}}>
                             <div className="reviewer_pic">
                                 <img src={reviews[cI].picture} style={{height: '100%'}}/>
                             </div>
                             <div className="reviewer_name txt_lg d-flex align-items-center ps-3">
                                {reviews[cI].name}
                                </div>

                     
                       </div>
                       <div className="reviewer_body p-4 pt-md-2 display-flex flex-column gap-4">
                     
                            <div className="review_title txt_xl pt-3 pt-md-1">
                                {reviews[cI].title}
                            </div>
                            <div className="review_content txt_md pt-2">
                                "{reviews[cI].content}"
                            </div>

                       
                             <div className="review_rating">

                                  {range(0, reviews[cI].rating).map((_, idx) => {
                                    return(
                                        <img src={'/star_icon3.png'} key={`review_img_${idx}`}
                                        className="star_img_review"/>
                                    )
                                  })}

                            </div>
                       </div>
                
                
            
             </div>
          </div>
          
          <div className="col-11 ps-5 pe-3 pe-md-5 ps-md-5 col-md-6 p-md-5 pl-5 pl-md-5 pt-3 pt-md-3 d-flex 
          justify-content-end justify-content-md-center flex-shrink-0 review_right_text">
             <div className="text_container_reviews txt_xl mt-3 ">
               We care for our customers and promise to always deliver 
               <span style={{color:'rgb(45, 149, 202)'}}> top-notch </span>services .
               If you are not happy , we promise we'll make up for it .
             </div>

          </div>
      </div>
    ) 
}