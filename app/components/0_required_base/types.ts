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
    text: string, img?: string , bgColor?:string , color?:string,  shape?: "square" | "round"
    height?: "small" | "medium" | "large",
    fontSize?: "larger" | "large" | "medium" | "small"
}
export type TextProps = {
    text: string, bgColor?:string , color?:string
}
export type ChoiceTextImageProps = {
    options: options[]
}

////////////////// CARDS ////////////////////////

export type text_center_stacked_props = {
    cards:text_center_stacked_cards[]
}
export type text_center_stacked_cards = {
    title?: string, content:string
}
