'use client'

import { dir } from "console"
import { List } from "lodash"
import { useEffect, useState, useRef, MouseEvent } from "react"

type CarArc = {
    images : string[]
}
type mappingObject = {
    left: string, right:string
}

export default function CarouselArc({images}:CarArc){

    const current_idx = useRef(2)
    const transition_list = useRef<{left:string, right:string}[]>([])
    const [reload, setReload] = useState(false)
    const [direction, setDirection] = useState<'right' | 'left'>('left')

    const timeoutRef = useRef<number | null>(0)
    const [init, setInit] = useState(false)
    const [transition_mappings, setTransi] = useState<Record<number, mappingObject>>({})
    
    useEffect(()=> {

  
    transition_list.current = [{left: 'left_to_right_t', right: 'right_to_left_t'}, 
                                       {left: 't_1_0', right: 't_0_1'},
                                       {left: 't_2_1', right: 't_1_2'},
                                       {left: 't_3_2', right: 't_2_3'},
                                       {left: 't_4_3', right: 't_3_4'}]

     return () => {
        if (timeoutRef.current){
           
            window.clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
     }
    }, [])

    useEffect(()=> {
        if (!reload) return;
       
       
        setReload(false)



    }, [reload])
    function switchIdx(direction:string){
        
        if (current_idx.current == images.length && direction == 'left'){
            current_idx.current = 0
        }
        else if (current_idx.current < images.length && direction == 'left'){
            current_idx.current += 1
        }
        else if (current_idx.current == 0 && direction == 'right'){
           current_idx.current = images.length
        }
        else{
            current_idx.current -= 1
        }

       
       
        

    }

    function setFutureTransitions(position:string | null) {
                const temp:Record<number, mappingObject> = {}
                let new_arr

                if (!init) {
                    setInit(true)
                    transition_list.current.map((t, idx) => {
                        temp[idx] = t
                        
                    })
                    setTransi(temp)
                    return

                }
              if (position == 'right'){

                        new_arr = [...transition_list.current.slice(1), ...transition_list.current.slice(0,1)]
                    }

              else if (position == 'left') {
                        new_arr = [...transition_list.current.slice(-1), ...transition_list.current.slice(0, 4)]
              }

              if (new_arr){
                new_arr.map((t, idx) => {
                        temp[idx] = t
                })
                  transition_list.current = new_arr
              }   

          
              setTransi(temp)
        
    }

    const ReorderImages = (e:MouseEvent) => {
            
             const position = e.clientX

             if (position < window.innerWidth / 2){
            
               switchIdx('left')

               const direction_changed = direction != 'left'
               setDirection('left')

                if (!direction_changed){
                       setFutureTransitions('left')
                 }
             
              
             }

             else{
                const direction_changed = direction != 'right'
                switchIdx('right')
                setDirection('right')

                 if (!direction_changed){
                      setFutureTransitions('right')
                 }
                     
            
               
              
                
              

             }
            
         }

    return (
        <div className="car_arc_row">
              {images.map((i, idx)=>{

                return (
                    <div key={idx} className={`${init? transition_mappings[idx][direction]: ''} 
                                               ${`car_arc_cont_${idx}`}`}
                 
                     onMouseUp={(e)=> ReorderImages(e)}
               
                      style={{pointerEvents: current_idx.current == idx? 'none' : 'unset',
                              zIndex: current_idx.current == idx? 3000 : '',
                              position: 'absolute'
                      }}>

                          <img src={i} className={'arc_img'}/>
                    </div>
                )
              })

              }
        </div>
    )
}