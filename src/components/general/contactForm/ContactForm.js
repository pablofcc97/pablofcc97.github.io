import React, {useRef} from "react";
import './contactForm.css'
import emailjs from '@emailjs/browser';

const ContactForm = () =>{

    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_k9ygopd', 'template_4qieklp', form.current, 'jOyhu4vLNpgWhXTrh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="contactForm flex">
            <div className="formInputs flex">
                <div className="reminderInfoContainer">
                    <div className="inputContainer">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="user_name" />
                    </div>
                    <div className="inputContainer">
                        <label for="email">Correo</label>
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
    )
}

export default ContactForm