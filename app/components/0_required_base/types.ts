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
    text: string, img?: string , bgColor?:string , color?:string, height?:string
}
export type TextProps = {
    text: string, bgColor?:string , color?:string
}
export type ChoiceTextImageProps = {
    options: options[]
}