export default function Text_left_img_right(){
    return (
          <div className="row text_left_img_right_main">

            <div className="col-lg-6 text_left_img_right_text">

              <div className="text_left_img_right_text_content p-4 txt_md">
              The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. 

              </div>
            </div>


            <div className="col-lg-6 text_left_img_right_image">
                  <img src={"/landing_image.jpg"} className="img-fluid h-100"></img>
            </div>

        </div>
    )
}