
type Big_image_props={
    image: string
}


export default function Big_image({image}:Big_image_props){
    return (
        <div className="row d-flex justify-content-center p-lg-4 p-2">
             <div className="col-12 col-lg-10">
                 <img className="img-fluid h-100" src={image}></img>
             </div>
        </div>
    )
}