
import type { TextProps } from "../0_required_base/types"

export default function Text_centered({text, bgColor, color}:TextProps){
    return (
        <div className="row d-flex justify-content-center row_text_centered p-0 p-md-5">

            <div className="col-lg-6 col-11 txt_md text_block mt-2 pb-5 pt-5 p-4 p-md-5 h-100"
            style={{backgroundColor: bgColor? bgColor: "white", lineHeight: 2,
                    color: color? color : "black", textAlign: "left",
                    border: color? `1 px solid ${color}`:'1px solid black'
                    
            }}>
               {text}
            </div>
        </div>
    )
}