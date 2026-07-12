type herotxtprops = {
     subHeaders: string[] , header: string, alignment: 'left' | 'center'
}


export function HeroTextCenter({header, subHeaders, alignment}:herotxtprops){
    return (
        <div className="row p-0 m-0 mt-5 pt-sm-5 pt-md-0 ps-3 ps-md-0 d-flex justify-content-center">
            <div className={`col-12 d-flex flex-column align-items-center`}>
                    <div className={`hero_alt_text_container text-${alignment}`}>

                
                    <div className="header_hero_alt txt_xl pb-3 pb-md-0">
                        {header}
                    </div>

                    {subHeaders.map((s, idx)=> {
                        return(
                            <div className="sub_head_hero_alt txt_sm_wide" 
                            key={idx}>
                                {s}
                            </div>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}