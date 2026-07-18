type svg = {
    shape: 'lightning', text:string, fill?: string, color?:string,
    rowColor?: string, fontFam?: string, strokeColor?: string , strokeWidth?:number
}

const lightning = `-10,22 55,12 51,27 110,17 110,92  
                   34,82 37,67 -10,58`


const shapes = {'lightning': lightning}

export default function SvgBanner({shape, text, fill, color, rowColor, fontFam, strokeWidth,
    strokeColor
}:svg){



    return (
    <div className="row gx-0" style={{backgroundColor: rowColor?? 'none'}}>
       <div className="col-12 text-center d-flex align-items-center justify-content-center
       position-relative">

        <div className="text_svg_banner text-center position-absolute txt_xl"
        style={{color: color?? 'black', fontFamily: fontFam?? 'unset'}}>
            {text}
        </div>

        <svg viewBox="0 0 100 100" width="100vw" preserveAspectRatio="none"
      height="max(25vh, 17vw)" clipPathUnits="objectBoundingBox">
            {fill && <rect width={'100%'} height={'100%'} fill={fill}
            clipPath={`url(#banner_${shape})`}>
                </rect>}


            <defs>
                <clipPath id={`banner_${shape}`}>
                <polygon points={shapes[shape]}/>
                </clipPath>
            </defs>


           {!fill &&  
            <image width="100%" height="100%" href={`/${shape}.png`} 
            clipPath={`url(#banner_${shape})`} preserveAspectRatio="none" />       
             }

                                 {/* BORDER AROUND THE MASK */}
                    <polygon
                        points={shapes[shape]}
                        fill="none"
                        stroke={strokeColor ?? 'none'}
                        strokeWidth={strokeWidth ?? 0}
                        filter="drop-shadow(0 2px 6px white)"
                    />

        </svg>
      </div>         
    </div>
    )
}