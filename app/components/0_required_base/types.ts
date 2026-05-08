export type Image  ={
    url: string
}
export type options = {
    img: string, name: string, txt:string
}
export type CarouselProps = {
 images : Image[], textLeft?: string, textRight?:string
}

export type BannerProps = {
    text: string, img?: string , bgColor?:string , color?:string,  
    shape?: "square" | "round"
    height?: "small" | "medium" | "large",
    fontSize?: "txt_xl" | "txt_lg" | "txt_md" | "txt_sm"
}
export type VertSlideBanner = {
    text:string, image?: string, bgColor?:string, color?:string, persistence?: "long" | "short",
    fontSize?: "txt_xl" | "txt_lg" | "txt_md" | "txt_sm"
}
export type TextProps = {
    text: string, bgColor?:string , color?:string
}
export type ChoiceTextImageProps = {
    options: options[]
}

////////////////// CARDS ////////////////////////
export type Cards = {
    cards: {title:string, content:string}[]
}

export type category = {
    key:string , val:string[]
}
///////////////// Debounce result /////////////////

export type Result ={
    name:string, label:string, url?:string, img?:string, id:number
}

//////////////// CART //////////////////////

export type item = {
    name:string, quantity:number, image:string, price: number, id:number
}