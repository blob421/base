
type spacer = {
    h: number, color?:string
}

export default function Spacer({h, color}:spacer){
    return (
        <div style={{height:`min(${h}vh, ${h}vw)`, backgroundColor: color ? color : 'none'}}></div>
    )
}