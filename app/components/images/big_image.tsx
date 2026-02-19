
type Big_image_props={
    image: string
}


export default function Big_image({image}:Big_image_props){
    return (
        <div className="row d-flex justify-content-center pb-4">
             <div className="col-11">
                 <img className="img-fluid w-100" src={image}></img>
             </div>
        </div>
    )
}