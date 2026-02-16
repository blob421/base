
import Contact_form from "../components/forms/form_classic"
import Banner from "../components/banners/banner"
import GrowingBanner from "../components/banners/growing_banner"
export default function Contact(){
    return (
        <>
      <Banner text="Contact us" height="medium"/>
     
      <Contact_form style="modern"/>
      <GrowingBanner text="Hello , I am growing as you scroll !" bgColor="rgb(143, 168, 221)" 
      fontSize="medium" height="medium" shape="round"/>
      <Contact_form style="classic"/>
       </>
    )
}