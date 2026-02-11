"use client"
import Stacked_cards from "../components/cards/stacked_cards"
import Dropdown_text_img from "../components/text_and_image/dropdown_text_img"
export default function Products(){
  return (
    <>
      <div className="row p-4 d-flex justify-content-center stacked_cards_row mb-3">
        <Stacked_cards/>
      </div>

      <Dropdown_text_img/>
    </>
  )
}