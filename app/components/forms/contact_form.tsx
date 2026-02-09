"use client"
import {useState} from 'react'

type contact_form_props = {
    phone? : string
}
export default function Contact_form({phone}:contact_form_props){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [subject, setSubject] = useState("")
    const [formSent, setFormSent] = useState(false)

    const subjects = ["Bug", "Sales", "Other question"]

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    fetch("/api/send_mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            content: content,
        }),
        }).then(res=> res.ok ? setFormSent(true)
                             : alert('Oops , the form was not sent , please try again later'))

    };

    return (

        <div className="row d-flex justify-content-center">

          <div className="col-lg-5 col-11 contact_form_frame p-lg-5 pb-lg-4 p-3 pt-5 pb-4">

            {!formSent && 
            <form  onSubmit={handleSubmit}>

                <div className='d-flex gap-3'>

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
                
                <div className='d-flex gap-3'>
                    <label htmlFor='contact_form_name'><strong>Full name:</strong></label>
                     <input type='text' onChange={(e)=> setName(e.target.value)} name='name' 
                     id='contact_form_name' required/>
                </div>

               <div className='d-flex gap-3'>
                    <label htmlFor='contact_form_email'><strong>Email:</strong></label>
                    <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)}
                    id={'contact_form_email'} required/>
               </div>

                <div className='d-flex gap-3'>
                
                    <label htmlFor='contact_form_content'><strong>Description:</strong></label>
                    <textarea onChange={(e)=> setContent(e.target.value)} name='content' 
                    id='contact_form_content' required/>

                </div>
                <div className='d-flex justify-content-end pr-3 pt-3'>
                         <input type='submit' value={"Send"} className='contact_form_btn'/>
                </div>
            </form>
            }

            {formSent && 
            <div className='form_sent_msg'>The form was sent sucessfully</div>
            }

          </div>
        </div>
    )
}