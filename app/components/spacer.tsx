
type spacer = {
    h: number
}

export default function Spacer({h}:spacer){
    return (
        <div style={{height:`${h}vh`}}></div>
    )
}