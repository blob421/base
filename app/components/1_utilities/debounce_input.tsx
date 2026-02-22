import debounce from 'lodash/fp/debounce.js'
import { fetchAuth } from './fetch_auth'
type debounceProps = {
    auth: boolean, url: string
}


import type { Result } from "../0_required_base/types"

export default function handle_debounce({url, auth}: debounceProps){
  
  return debounce(400, (input, callback)=>{
    if (input.length < 2){
        callback([])
        return
    }
    const full_url = url + `?name=${input}`
    let choices:Result[]
    auth ? 
     fetchAuth(full_url).then(res => res.json()).then(data=> {
      console.log(data)
   
            choices = data.results.map((element:Result) => ({
            label: element.name,
            value: element.id
            
   
        }))
        callback(choices)
    }) 

    : 
    fetch(url).then(res=> res.json()).then(data=> {
      console.log(data)
   
            choices = data.results.map((element:Result) => ({
            label: element.name,
            id: element.id,
            img: element.img,
            url: element.url
            
   
        }))
        callback(choices)
    })
    
      
  })
}