

import Text_centered from "../components/text/text_centered"
import Banner from "../components/banners/banner"
export default function About(){

    const TextCenteredContent = `NovaLynx Solutions is 
    a forward‑thinking technology studio specializing
     in intuitive automation tools and human‑centered d
     igital products. Founded by a small team of engineers who value clarit
     y and craftsmanship, the company focuses on building reliable systems that simplify comp
     lex workflows for businesses of all sizes. NovaLynx blends rigorous technical standards with
      a minimalist design philosophy, ensuring every product is both powerful and effortless to us
      e. With a culture rooted in transparency, adaptability, and long‑term thinking, the company con
      tinues to push for solutions that feel as elegant as they are practical.`

    return (
        <>
        <Banner text="About our company" height="large"></Banner>
         <Text_centered text={TextCenteredContent}/>
        </>
    )
}