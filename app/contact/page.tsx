
import Contact_form from "../components/forms/form_classic"
import Banner from "../components/banners/banner"
import GrowingBanner from "../components/banners/growing_banner"
import Image_contact_card from "../components/text_and_image/image_contact_card"



const text_grid_img_section = [{name: 'Phone :', content:'1888-888-888'}, 
                               {name: 'Address :', content: '123 main street, CA'}, 
                               {name: 'Visiting hours :', content:`Mon: 12-12 
                                                                  Tue: 13-14
                                                                  Wed: 11-14
                                                                  Thur: 12-16
                                                                  Week-end: closed`},
                                {content: 'For buisiness inquiries email us at :  farm@egg.com'}]

export default function Contact(){
    return (
        <>
      <Banner text="Contact us" height="medium"/>
     
      <Contact_form style="modern"/>
      <GrowingBanner text="Hello , I am growing as you scroll !" bgColor="rgb(143, 168, 221)" 
      fontSize="medium" height="medium" shape="round"/>
      <Contact_form style="classic"/>
      <Banner text="Our location" height="medium"/>
       <Image_contact_card sections={text_grid_img_section} image={'/landing_image.jpg'} 
       bgColor="antiquewhite" color="black"/>
       </>
    )
}