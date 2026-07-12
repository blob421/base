


export default function addColor(text:string, delimiters: string[], color:string){

     let  deletemited_text = text.split(' ')
    deletemited_text = deletemited_text.filter(c => c !== '' && !c.includes('\n') )
    
    const idx:number[] = []


    delimiters.forEach(d=> {
        idx.push(deletemited_text.indexOf(d))
    })

  

    let finalStr = ''

    if (idx.length > 0){

        deletemited_text.forEach((w, i)=> {

            if (idx.includes(i) && (idx.indexOf(i)) % 2 == 0){
               finalStr += `<span style='color: ${color}'> ` +  w + " "
            }
            else if ((idx.includes(i) && (idx.indexOf(i)) % 2 == 1)){
               finalStr += w + ' </span>'
            }
            else {
                finalStr += w + ' '
            }
        })

          
            
        return finalStr
    }



}