

type TextImageBanner = {
    text: string, bgColor?: string, color?: string, image:string, 
    fontSize?: 'txt_xl' | 'txt_lg' | 'txt_md' | 'txt_sm', imgPosition?: 'right' | 'left'
}


export default function TextImageBanner({text, image, bgColor, color, fontSize,
    imgPosition
}:TextImageBanner){

    return (
     
        <div className="row d-flex align-items-center justify-content-lg-start 
        justify-content-center" 
             style={{backgroundColor: bgColor? bgColor: 'antiquewhite',
               
             }}>
            {imgPosition == 'left' && 
            <>
            <div className="col-11 col-md-5" >

               <img src={image} className="img-fluid mt-4 mt-lg-0"></img>

            </div>

            <div className={`col-11 ${fontSize? fontSize : 'txt_md'} 
            col-md-6 p-3 p-lg-5 pb-5 pt-5 pt-lg-2 
                                                                     d-flex align-items-center`}
                 style={{lineHeight: 1.7, color: color? color :'black'}}>

                 {text}
                
            </div>
            </>
            }
 
    

            {(!imgPosition || imgPosition == "right") && 
            <>
            <div className="col-0 col-md-1">
            </div>


            <div className={`col-11 ${fontSize? fontSize : 'txt_md'} col-md-6 
            p-4 p-lg-5 pb-5 pt-5
             d-flex align-items-center pt-lg-3`}
                 style={{lineHeight: 1.7, color: color? color :'black'}}>

                 {text}
                
            </div>
       

             <div className="col-11 col-md-5" >

               <img src={image} className="img-fluid pb-4 pb-lg-0"></img>

            </div>
            </>
            }

        </div>
   
    )

}