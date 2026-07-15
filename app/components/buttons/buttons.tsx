
type buttons = {
    buttons: {text: string, href:string}[], color: string, color2: string, bgColor: string
    bgColor2:string, rowColor?: string, hoverColor: string, hoverBgColor: string,
    paddingStart: number
}



export default function Buttons({buttons, bgColor, bgColor2, color, color2, rowColor,
    hoverColor, hoverBgColor, paddingStart
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
        <div className={`row p-0 m-0 ${buttons.length == 1 && 'ps-3'} ps-lg-${paddingStart} row_buttons`} 
        style={{backgroundColor: rowColor? rowColor : 'none'}}>
            <div className={`col-12 d-flex gap-2 d-flex 
                ${buttons.length > 1 && 'justify-content-center'} justify-content-md-start g-0 ps-lg-${paddingStart} 
                pt-4 pb-4 ms-lg-1`}>

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