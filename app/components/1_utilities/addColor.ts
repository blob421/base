


export default function addColor(text:string, delimiters: string[], color:string){

     let  deletemited_text = text.split(' ')
    deletemited_text = deletemited_text.filter(c => c !== '' && c !== '\n' )
    
    const idx:number[] = []


    delimiters.forEach(d=> {
        idx.push(deletemited_text.indexOf(d))
    })

  

    let finalStr = ''

    if (idx.length > 0){
 
        for (let i = 0; i < deletemited_text.length; i++){
             
            if (idx.includes(i)) {

      
                if (idx.indexOf(i) % 2 == 0){

                    finalStr += `<span style='color: ${color}'> ` +  deletemited_text[i] + " "
                }

                else {
                    finalStr +=  deletemited_text[i] + ' </span>'
                }
            }
            else {
                finalStr += deletemited_text[i] + ' '
            }
       
        }

          
            
        return finalStr
    }



}