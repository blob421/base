"use client"

import Banner from "../components/banners/banner"

import {useEffect, useState} from "react"
import Items_list_img from "../components/text_and_image/items_list_img"
import type { item } from "../components/0_required_base/types"




export default function Cart(){

    const [cartData, setCartData] = useState<item[] | undefined>(undefined)
    const cart_url = "/api/cart_items"

    const fetch_cart = () =>{
         fetch(cart_url).then(res=> res.json()).then(data => data? setCartData(data.items): "")
         console.log(cartData)
    }

    useEffect(()=>{
        
      fetch_cart()
    },[])



    return(
        <>
          <Banner text="Your cart"></Banner>
          <Items_list_img items={cartData} apiUrl="/api/cart_items"
          setItems={(newItem:item, idx:number)=> setCartData(prev => {
          if (!prev) {
            return prev;

          } else {
            const newObject = [...prev]
            newObject[idx] = newItem
            return newObject
          }

        })}
        />
        </>
    )
}