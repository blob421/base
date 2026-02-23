
import { method } from "lodash"
import type { item } from "../0_required_base/types"
import { useState, useEffect } from "react"
type Items_list_img_props = {
    items?: item[], setItems : (newItem:item, idx:number) => void, apiUrl:string,
   
}




export default function Items_list_img({items, setItems, apiUrl}:Items_list_img_props){
    const [qtChanged, setQtChanged] = useState(false)
    const [total , settotal] = useState(0)

    useEffect(()=>{

      let cart_total = 0
      items?.forEach(i=>{
       cart_total += i.quantity * i.price
    })
      settotal(cart_total)

    }, [items])

    const updateItems = () =>{
    if(qtChanged)
        fetch(apiUrl, {body: JSON.stringify({items : items, method: 'POST'})})
    }

    return (
        <>
        {items && items?.length > 0 && 
        <div className="row justify-content-center d-flex txt_sm row_items_list">
              <div className="col-lg-6 col-11 items_list_frame p-0">
                  {items.map((i, idx) =>{
                    return(
                        <div className="single_item_list_img" key={`cart_item_${i.id}`}>

                            <div className="img_items_list">
                                 <img src={i.image} style={{maxHeight:"80%"}}/>
                            </div>

                            <div className="name_items_list">
                          
                               <div id="name">{i.name}</div>
                            </div>



                            <div className="price_items_list">
                                
                                {i.price * i.quantity}$
                            </div>

                            <div className="quantity_items_list">
                                <label htmlFor="quantity">Qt:</label>
                                <input type="number" id="quantity" name="quantity" min="1" 
                                max="10" value={i.quantity} step="1"
                                onChange={(e)=> {setItems({...i, quantity: parseInt(e.target.value)}, idx) ; 
                                setQtChanged(true)}}
                                onBlur={() => {
                                    updateItems()
                                    }}>

                                </input>
                            </div>

                        </div>
                    )
                  })}

        
              </div>
             
        </div>

        }
         <div className="row d-flex justify-content-center txt_lg total_row_items_list">
                      <div className="cart_total_div col-lg-6 col-11 d-flex justify-content-end p-0 pt-1">
                      Estimated total : {total} $
                  </div>
        </div>
         {!items && 
                  
                <div className="row d-flex justify-content-center">
                 Cart is empty
                </div>}
       </>
    )
}