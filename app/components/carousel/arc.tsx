'use client'

import { dir } from "console"
import { List } from "lodash"
import { useEffect, useState, useRef, MouseEvent } from "react"

type CarArc = {
    images : string[], style: string
}
type mappingObject = {
    left: string, right:string
}

export default function CarouselArc({images, style}:CarArc){

    const current_idx = useRef(2)
    const transition_list = useRef<{left:string, right:string}[]>([])
  
    const [direction, setDirection] = useState<null | 'left' | 'right'>(null)

  
    const [init, setInit] = useState(false)
    const [transition_mappings, setTransi] = useState<Record<number, mappingObject>>({})
    
    useEffect(()=> {

    if (style && style == 'arc'){
    transition_list.current = [{left: 'left_to_right_t', right: 'right_to_left_t'}, 
                                       {left: 't_1_0', right: 't_0_1'},
                                       {left: 't_2_1', right: 't_1_2'},
                                       {left: 't_3_2', right: 't_2_3'},
                                       {left: 't_4_3', right: 't_3_4'}]
    }
    else if (style && style == 'circle'){
        transition_list.current = [{left: 'left_to_right_c halt_rotation', right: 'right_to_left_c halt_rotation'}, 
                                       {left: 'c_1_0', right: 'c_0_1'},
                                       {left: 'c_2_1', right: 'c_1_2'},
                                       {left: 'c_3_2', right: 'c_2_3'},
                                       {left: 'c_4_3', right: 'c_3_4'}]
    }



    const temp:Record<number, mappingObject> = {}     

      transition_list.current.map((t, idx) => {
                        temp[idx] = t})
    setTransi(temp)
  
    }, [])

 
    function switchIdx(direction:string){
        
        if (current_idx.current == images.length -1 && direction == 'left'){
            current_idx.current = 0
        }
        else if (current_idx.current < images.length -1 && direction == 'left'){
            current_idx.current += 1
        }
        else if (current_idx.current == 0 && direction == 'right'){
           current_idx.current = images.length - 1 
        }
        else{
            current_idx.current -= 1
        }

       
       
        

    }

    function setFutureTransitions(position:'right' | 'left') {
                const temp:Record<number, mappingObject> = {}
                let new_arr

                if (!init && position !== 'right') {
                  
                    setInit(true)
                    return
              
                    }
                else {
                    setInit(true)
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
    function get_edges_idx(){ 
        const c = current_idx.current 
        const edges = c == 2? [0, 4] : c == 3? [1, 0]: c == 4? [2, 1]:  c == 1? [4, 3]: [3, 2]
        return edges
    }


    const ReorderImages = (e:MouseEvent) => {
             let direction_changed

             const position = e.clientX
          
             if (position < window.innerWidth / 2){
            
               switchIdx('left')

               if (direction){
                    direction_changed = direction != 'left'
               }
               else {
                     direction_changed = false
               }
              
                setDirection('left')

                if (!direction_changed){
                       setFutureTransitions('left')
                 }
             
              
             }

             else{
                 switchIdx('right')
                if (direction){
                   direction_changed = direction != 'right'
                }

                else {
                    direction_changed = false
                }
                
                setDirection('right')

                 if (!direction_changed){
                   
                      setFutureTransitions('right')
                 }
                     
             }
            
         }

    return (
        <div className="row d-flex justify-content-center overflow-y-hidden overflow-x-md-visible overflow-x-hidden">
      
            <div className={`${style == 'circle'? 'col-md-8': 'col-md-6' } col-12 car_${style}_row position-relative`}>
              {images.map((i, idx)=>{

                return (
                    <div key={idx} className={`${init && direction ? transition_mappings[idx][direction]: ''} 
                                               ${`car_${style}_cont_${idx}`} 
                                              `}
                 
                     onMouseUp={(e)=> ReorderImages(e)}
               
                      style={{pointerEvents: current_idx.current == idx ? 'none' : 'all',
                            
                              position: 'absolute',
                          
                              backgroundColor: current_idx.current == idx ?'white' : 'rgb(0, 0, 0)',
                              
                              
                      }}>

                          <img src={i} className={`${style}_img`} 
                          style={{opacity: current_idx.current == idx ? '1' 
                                         : get_edges_idx().includes(idx)? '0.8':
                                           
                            '0.95'
                                                                  }}/>
                    </div>
                )
              })

              }
              
              </div>
             
        </div>
    )
}