
type spacer = {
    h: number, color?:string
}

export default function Spacer({h, color}:spacer){
    return (
        <div style={{height:`${h}vh`, backgroundColor: color ? color : 'none'}}></div>
    )
}