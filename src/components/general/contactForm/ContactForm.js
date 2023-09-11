import React, {useRef, useState} from "react";
import './contactForm.css'
import emailjs from '@emailjs/browser';
import MessageBox from '../MessageBox/MessageBox'

const ContactForm = () =>{
    const [message, setMessage] = useState({})
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_k9ygopd', 'template_4qieklp', form.current, 'jOyhu4vLNpgWhXTrh')
            .then((result) => {
                setMessage({
                    content:'¡Mensaje Enviado correctamente!',
                    purpose: 'success'
                })
                setTimeout(()=>{
                    setMessage({
                        content:'',
                        purpose: ''
                    }) 
                }, 4000)

            }, (error) => {
                console.log(error.text);
        });
    }

    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail} className="contactForm flex">
                <div className="formInputs flex">
                    <div className="reminderInfoContainer">
                        <div className="inputContainer">
                            <label for="user_name">Nombre</label>
                            <input type="text" id="name" name="user_name" />
                        </div>
                        <div className="inputContainer">
                            <label for="user_email">Correo</label>
                            <input type="email" id="email" name="user_email" />
                        </div>
                    </div>
                    <div className="reminderMessageContainer flex">
                        <label for="message">Mensaje</label>
                        <textarea name="message" id="message" ></textarea>
                    </div>
                </div>
                <button type="submit" value='send' className="button">Envíe su mensaje</button>
            </form>
            {message.content ?<MessageBox text={message.content} purpose={message.purpose}/> :<></>}
        </div>
    )
}

export default ContactForm