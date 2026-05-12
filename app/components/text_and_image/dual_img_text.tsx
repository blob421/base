'use client'
type DualImage = {
    images : [string, string], imageRatio?: string | '1/1'
    , text: string
}


export default function DualImageText({images, imageRatio, text}:DualImage){

    return (
        <div className="row d-flex ms-md-2 dual_image_row">

        
            <div className="dual_img_container col-md-7 col-12">
            {images.map((i, idx) => {

                    return (
                        <div key={idx} className={idx == 0 ? 'dual_image_big': 'dual_image_small'}
                        style={{aspectRatio: imageRatio? imageRatio : '1/1'}}>
                            <img src={i} className={'dual_image_image'}/>
                        </div>
                    )
                } )
            }
            </div>

            <div className="col-md-5 col-12 d-flex justify-content-center align-items-center">
                <div className="dual_image_text p-4">
                {text}
                </div>
            </div>
      </div>

    )
}