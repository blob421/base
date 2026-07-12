

export default function addLink(href:string, word:string, text:string){

    let deletemited_text = text.split(' ')

    deletemited_text = deletemited_text.filter(c => c !== '' && !c.includes('\n') )

    const idx = deletemited_text.indexOf(word)
  
    let finalStr = ''

    deletemited_text.forEach((w, i)=> {

            if (idx == i) {
               finalStr +=  `<a href='${href}'> ` +  w + ' </a>' 
            }
       
            else {
                finalStr += w + ' '
            }
        })
  



    return finalStr

}
