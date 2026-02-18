

type text_grid_img_props = {
    sections: section[], image: string, bgColor?:string, color?:string
}

type section = {
    name?: string, content: string
}


export default function Image_contact_card({sections, image, bgColor, color}:text_grid_img_props){
    return(
        <div className="row d-flex justify-content-center gap-3 pb-3 row_text_grid_image">
              <div className="col-lg-7 col-11 img_text_grid_img_cont p-0">
                  <img src={image} className="img_text_grid_img img-fluid"/>
              </div>

              <div className="grid_text_grid_img col-lg-7 col-11 txt_md" 
              style={{backgroundColor: bgColor? bgColor: "white",
                                color: color? color: 'grey'
              }}>
                  {sections.map((s, idx)=> {
                    return (
                        <div key={idx} className={s.name ? "single_section_text_grid_image"
                                                          : "centered_text_grid" }>
                           <strong >{s.name && s.name}</strong>
                            {s.content.split('\n').map((line, i) => (
                        <div key={i} className={"d-flex justify-content-center"}>{line}</div>
                        ))}
                        </div>
                    )
                  })}
              </div>
        </div>
    )
}