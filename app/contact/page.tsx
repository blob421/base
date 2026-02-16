
import Contact_form from "../components/forms/form_classic"
import Banner from "../components/banners/banner"
import GrowingBanner from "../components/banners/growing_banner"
export default function Contact(){
    return (
        <>
      <Banner text="Contact us"/>
     
      <Contact_form style="modern"/>
      <GrowingBanner text="Hello , I am growing as you scroll !" bgColor="skyblue"/>
      <Contact_form style="classic"/>
       </>
    )
}