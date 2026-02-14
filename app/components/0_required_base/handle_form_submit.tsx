

type handleSubmitProps = {
    e: React.FormEvent<HTMLFormElement>
    formSent : (bool:boolean) => void , name: string, email:string, subject:string,
    content:string
}


export const handleSubmit = async ({e, formSent, name, email, subject, content}:handleSubmitProps) => {
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
        }).then(res=> res.ok ? formSent(true)
                             : alert('Oops , the form was not sent , please try again later'))

    };