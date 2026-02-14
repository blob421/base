"use client"
import {useState} from 'react'
import { handleSubmit } from '../0_required_base/handle_form_submit'

type contact_form_props = {
    phone? : string, style: string
}
export default function Contact_form({phone, style}:contact_form_props){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [subject, setSubject] = useState("")
    const [formSent, setFormSent] = useState(false)

    const subjects = ["Bug", "Sales", "Other question"]

   

    return (

        <div className="row d-flex justify-content-center contact_form_row mt-1">

          <div className={style=='classic'? "col-lg-5 col-11 contact_form_frame p-lg-5 pb-lg-4 p-3 pt-5 pb-4 txt_md":
                                            "col-lg-4 col-11 contact_form_frame_modern txt_md"
          }>

            {!formSent && 
            <form  onSubmit={(e)=> handleSubmit({e, email, name, content, subject, 
             formSent: (bool:boolean) => setFormSent(bool)})}>

                <div className={style == 'classic' ? 'd-flex gap-2 w-100':
                                                     'd-flex flex-column gap-1'
                }>

                    <label htmlFor="contact_form_select"><strong>Reason:</strong>
                    </label>

                    <select id='contact_form_select' required 
                    onChange={(e) => setSubject(e.target.value)}>

                        <option value={""}>--</option>
                        {subjects && subjects.map((s, idx) => {
                            return (
                               
                            <option  key={idx} value={s}>
                                {s}
                            </option>
                            )
                        })}
                    </select>
                </div>
                
                <div className={style == 'classic' ? 'd-flex gap-2 w-100':
                                                     'd-flex flex-column gap-1 mt-2'
                }>
                    <label htmlFor='contact_form_name'><strong>Full name:</strong></label>
                     <input type='text' onChange={(e)=> setName(e.target.value)} name='name' 
                     id='contact_form_name' required placeholder='name ...'/>
                </div>

               <div className={style == 'classic' ? 'd-flex gap-2 w-100':
                                                     'd-flex flex-column gap-1 mt-2'
                }>
                    <label htmlFor='contact_form_email'><strong>Email:</strong></label>
                    <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)}
                    id={'contact_form_email'} required placeholder='example@email.com'/>
               </div>

                <div className={style == 'classic' ? 'd-flex gap-2 w-100':
                                                     'd-flex flex-column gap-1 mt-2'
                }>
                
                    <label htmlFor='contact_form_content'><strong>Details:</strong></label>
                    <textarea onChange={(e)=> setContent(e.target.value)} name='content' 
                    id='contact_form_content' required/>

                </div>
                <div className={style == 'classic' ? 'd-flex justify-content-end pt-3 w-100':
                                                    'd-flex justify-content-end pt-4 w-100'
                }>
                         <input type='submit' value={"Send"} className='contact_form_btn'/>
                </div>
            </form>
            }

            {formSent && 
            <div className={style== 'classic' ? 'form_sent_msg':
                                                ''
            }>The form was sent sucessfully</div>
            }

          </div>
        </div>
    )
}