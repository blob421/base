"use client"
import handle_debounce from "../1_utilities/debounce_input"
import type { category } from "../0_required_base/types"
import { useMemo, useState, useEffect } from "react"

type NavSearchProps = {
    sections: category[], company_logo: string, cart_img:string, bgColor?: string, color?:string
}

import type { Result } from "../0_required_base/types"

export default function NavbarSearch({sections, bgColor, company_logo, cart_img, color}:NavSearchProps){

const [catTriggered, setCatTriggered] = useState(false)
const [results, setResults] = useState<Result[]| []>([])


const handleClicks = (e:MouseEvent) =>{
   const target = e.target as HTMLElement | null
   if (!target?.closest('.navbar_search_row') && !target?.closest('.search_results_wrapper')){
    setResults([])

   }
}
const HandleMouseEvent = (e:MouseEvent) =>{
 const target = e.target as HTMLElement | null
  if (!target?.closest('.navbar_search_row') && !target?.closest('.nav_search_cat_row_expanded')){
    setCatTriggered(false)
  }
}

const debouncedSearch = useMemo(() => 
  handle_debounce({ url: '/api/fetch_products', auth: false }),
[])

useEffect(()=>{
  window.addEventListener('mousemove', HandleMouseEvent)
  return () => window.removeEventListener('mousemove', HandleMouseEvent)
},[])

useEffect(()=>{
  window.addEventListener('click', handleClicks)
  return () => window.removeEventListener('click', handleClicks)
},[])


    return (
        <>
        <div className="row navbar_search_row d-flex justify-content-center align-items-center 
        pb-4 pt-4 pb-lg-3 pt-lg-3" 
             style={{color: color? color:'black'}}>

              <div className="col-2 d-flex justify-content-center">
                 <img src={company_logo} className="nav_search_logo p-2" 
                 onClick={()=> window.location.href="/"}/>
              </div>


              <div className="col-7 d-flex flex-column gap-2 align-items-center position-relative txt_sm">
                  <input type="search" placeholder="Search products ..." style={{width: '100%'}}
                         onChange={(e)=> {debouncedSearch(e.target.value, (results:any) => {
                                                                          setResults(results)}
                   ); setCatTriggered(false)}}/>
                   <div className="btn_below_seach_nav_container">
                       <button className="btn_categories_searchbar_nav txt_xs" 
                       onClick={()=>{setCatTriggered(!catTriggered); setResults([])}}>Shop by category</button>
                      <button className="btn_categories_searchbar_nav txt_xs">Promotions</button>
                   </div>
     

      

              </div>


              <div className="col-2 d-flex justify-content-end position-relative" 
              onClick={()=> window.location.href = '/cart'}>
                  <span className="cart_n_items_bubble txt_xs">1</span>
                  <img src={cart_img} className="nav_search_cart_image p-2"/>
              </div>

        </div>

          {results.length > 0 && (
            <div className="row d-flex justify-content-center pt-1">
        <div className="search_results_wrapper position-absolute col-7">
            {results.map((r) => (
            
                <div className="single_result txt_sm" key={`searchbar_option_${r.id}`} 
                onClick={()=> r.url ? window.location.href=r.url : ""}>
                    <div style={{width:'100%'}}>{r.label}</div>
                    {r.img && <img src={r.img} className="img_searchbar"/>}
                </div>
                
               
                
            ))}
        </div>
        </div>
    )}
  
    <div className={catTriggered ?"row d-flex justify-content-center nav_search_cat_row_expanded"
                                 : "row d-flex justify-content-center nav_search_cat_row"}>
       {catTriggered &&                           
        <div className="col-12 nav_search_cat_grid">
            {sections && sections.map((s, idx)=>{
                return (
                    sections[idx].val.length > 0 ?
                    <div className="navbar_search_grid_element d-flex flex-column" key={idx}>
                        <div className="txt_md nav_search_cat_title">{s.key}</div>
                        {s.val.length > 0 && s.val.map((v, index)=>{
                            return (
                            <div className="navbar_search_grid_element_unit txt_sm" key={`subsub_${index}`}>
                                <a href={`/products/${v.toLocaleLowerCase()}`} 
                                style={{textDecoration:'none', color:'black'}}>{v}</a>
                            </div>
                        )
                        })}
                    </div>: ""
                )
            })}
        </div>
        }   
    </div>

    </>
    )
}