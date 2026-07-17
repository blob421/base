'use client'
type buttons = {
    buttons: {text: string, href:string}[], color: string, color2?: string, bgColor: string
    bgColor2?:string, rowColor?: string, hoverColor: string, hoverBgColor: string,
    paddingStart?: number, extraMargin?: number
}



export default function Buttons({buttons, bgColor, bgColor2, color, color2, rowColor,
    hoverColor, hoverBgColor, paddingStart, extraMargin
}:buttons){


    const handleHover = (el:any, idx:number, how:string) => {

            if (how == 'in'){
               el.target.style.backgroundColor = hoverBgColor 
               el.target.style.color = hoverColor
               el.target.style.transform = 'scale(1.05)'
            }
            else {
               idx == 0 ? el.target.style.backgroundColor = bgColor
                        : el.target.style.backgroundColor = bgColor2
               idx == 0 ? el.target.style.color = color
                        : el.target.style.color = color2

               el.target.style.transform = 'scale(1)'

                
            }    
    }

    return (
        <div className={`row p-0 m-0 ps-sm-${paddingStart} 
        row_buttons pt-4 pb-4 pt-lg-0 pb-lg-0 
        ${buttons.length > 1 && `justify-content-center ps-0 justify-content-sm-start`}
        ${buttons.length == 1 && 'justify-content-start ps-3 ps-sm-4 ps-md-5 ps-lg-4'}
        `}
        
        style={{backgroundColor: rowColor? rowColor : 'none'}}>
            <div className={`col-1 d-flex gap-2 d-flex ${extraMargin && `ms-lg-${extraMargin}`}
                ${buttons.length > 1 && 'justify-content-center'} justify-content-sm-start g-0 
                pt-4 pb-4`}>

              {buttons.map((b, idx)=> {
                return (
                    <button className='btn_href_buttons txt_sm' key={idx} 
                    onMouseEnter={(el) => handleHover(el, idx, 'in')}
                    onMouseLeave={(el) => handleHover(el, idx, 'out')}
                    style={idx == 0 ? {backgroundColor: bgColor, color: color}: 
                                      {backgroundColor: bgColor2, color: color2}} 

                    onClick={()=> window.location.href= b.href}>
                      {b.text}
                    </button>
                )

              })}
            </div>
        </div>
    )
}