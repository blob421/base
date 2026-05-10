

type TextImageBanner = {
    text: string, bgColor?: string, color?: string, image:string, 
    fontSize?: 'txt_xl' | 'txt_lg' | 'txt_md' | 'txt_sm', imgPosition?: 'right' | 'left'
    , imgMargin?: boolean
}


export default function TextImageBanner({text, image, bgColor, color, fontSize,
    imgPosition, imgMargin
}:TextImageBanner){

    return (
     
        <div className="row d-flex align-items-center justify-content-lg-start 
        justify-content-center" 
             style={{backgroundColor: bgColor? bgColor: 'antiquewhite',
               
             }}>
            {imgPosition == 'left' && 
            <>
            <div className="col-11 col-md-5" >

               <img src={image} 
                    className={`img-fluid mt-4 mt-md-0 p-1 ${imgMargin ? 'p-md-4' : "p-md-0"}`}></img>

            </div>

            <div className={`col-11 ${fontSize? fontSize : 'txt_md'} 
            col-md-6 p-3 p-md-5 pb-5 pt-4 pt-md-4 pt-1 mt-1 mt-md-0 
                                                                     d-flex align-items-center`}
                 style={{lineHeight: 2, color: color? color :'black'}}>

                 {text}
                
            </div>
            </>
            }
 
    

            {(!imgPosition || imgPosition == "right") && 
            <>
            <div className="col-0 col-md-1">
            </div>


            <div className={`col-11 ${fontSize? fontSize : 'txt_md'} col-md-6 
            p-4  m-3 m-md-0 p-md-5 pb-3 pt-5 mb-2 mb-md-0
             d-flex align-items-center pt-md-3`}
                 style={{lineHeight: 2, color: color? color :'black'}}>

                 {text}
                
            </div>
       

             <div className="col-11 col-md-5" >

               <img src={image} className={`img-fluid p-1 pb-5 ${imgMargin ? 'p-md-4' : "p-md-0"}`}></img>

            </div>
            </>
            }

        </div>
   
    )

}