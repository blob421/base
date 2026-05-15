       

type textProps = {
    text: string, bgColor?: string, color?:string, fontSize?: string
}
export default function Text_Round({text, bgColor, color, fontSize}:textProps){
    return (
       
       <div className={`col-lg-7 col-10 stacked_cards_text pt-5 p-5 h-75 mt-4 
                       ${fontSize? fontSize : 'txt_md'}`}
                       
            style={{backgroundColor: bgColor? bgColor: 'antiquewhite', 
                    color: color? color : 'black' }}>

            {text}
        </div>
    )
}    
       
