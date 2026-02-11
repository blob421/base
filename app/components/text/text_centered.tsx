
import type { TextProps } from "../0_required_base/types"

export default function Text_centered({text, bgColor, color}:TextProps){
    return (
        <div className="row d-flex justify-content-center row_text_centered">
            <div className="col-lg-6 col-11 text-center txt_md text_block mt-2 p-lg-5 p-4"
            style={{backgroundColor: bgColor? bgColor: "white",
                    color: color? color : "black"
            }}>
               {text}
            </div>
        </div>
    )
}