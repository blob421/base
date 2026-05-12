
'use client'

import { useState } from "react"

type gridText = {
    blocks : {title:string, content:string}[], color?: string, bgColor?: string
    footers: {button: boolean, text:string}[], selectionColor : string, 
}


export default function OptionBlocks({blocks, footers, color, bgColor, selectionColor}:gridText){

    const [selected, setSelected] = useState(0)

    return (
        <div className="row d-flex justify-content-center gap-5">
             {blocks.map((b, idx) => {

                return (
                    <div key={idx} className="text_blocks col-lg-5 col-10 p-0" 
                         style={{border: idx == selected? `2px solid ${selectionColor}` 
                                                        :  color? `2px solid ${color}` 
                                                        : '2px solid black',
                                 color: color? color: 'black',
                                 backgroundColor: bgColor ? bgColor : 'white',
                                 boxShadow: idx == selected ? `0px 0px 26px ${selectionColor}`: ''

                                }}
                         onClick={()=> setSelected(idx)}>

                        <div className="blocks_title txt_lg p-4" 
                             style={{borderBottom: color? `1px solid ${color}` : '1px solid black' }}>
                            {b.title}
                        </div>
                        <div className="blocks_content p-4 txt_md">
                            {b.content}
                        </div>
                        <div className="blocks_footer txt_sm" 
                             style={{borderTop: color? `1px solid ${color}` : '1px solid black'
                                     }}>

                                {footers[idx].button && 
                                <button className="blocks_footer_btn">{footers[idx].text}</button>
                                }

                                {!footers[idx].button && 
                                 <div className="txt_xs blocks_footer_text_only">
                                    {footers[idx].text}
                                 </div>
                                
                                }
                                

                        </div>
                      
                    </div>
                   
                )
              })
             }
        </div>
    )
}