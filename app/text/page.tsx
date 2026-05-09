import SlideInText from "../components/text/slide_text_top_prev_elem"

export default function Text(){

    return (
        <>
        <div style={{height: '90vh'}}></div>

        <div style={{backgroundColor: 'black', height: '18vh'}}></div>
        <SlideInText text="Woow I am sliding ...." color="white"/>
        <div style={{height: '90vh'}}></div>

        </>
    )
}