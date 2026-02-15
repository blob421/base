"use client"

import Text_centered from "../components/text/text_centered"
import Banner from "../components/banners/banner"
import Text_center_stacked from "../components/cards/text_center_stacked"

export default function About(){
    
    const second_text_stacked_Center = `NovaLynx Solutions isn’t trying to reinvent the wheel; they’re trying to make it glide.
Born from a handful of engineers who care more about clarity than buzzwords, the studio builds tools that dissolve friction in the background of a business. Their craft is subtle: systems that behave predictably, interfaces that don’t demand attention, automation that feels like it already understands you.

They approach technology like watchmakers — precise, patient, obsessed with the hidden mechanisms that make everything feel effortless on the surface. Every product is shaped by a simple belief: complexity should serve the user, not the other way around.`
    const TextCenteredContent = `NovaLynx Solutions is 
    a forward‑thinking technology studio specializing
     in intuitive automation tools and human‑centered d
     igital products. Founded by a small team of engineers who value clarit
     y and craftsmanship, the company focuses on building reliable systems that simplify comp
     lex workflows for businesses of all sizes. NovaLynx blends rigorous technical standards with
      a minimalist design philosophy, ensuring every product is both powerful and effortless to us
      e. With a culture rooted in transparency, adaptability, and long‑term thinking, the company con
      tinues to push for solutions that feel as elegant as they are practical yeah yeah yeah eyah eyah hyeh.`
      
    const stacked_text_cards = [{title: 'A cool company', content: second_text_stacked_Center},
                                {title: 'An innovative take', content:TextCenteredContent}]
    return (
        <>
        <Banner text="About our company" height="large"></Banner>
         <Text_centered text={TextCenteredContent}/>
         <Banner text="About our company" height="large"></Banner>
         <Text_center_stacked cards={stacked_text_cards}/>
        </>
    )
}