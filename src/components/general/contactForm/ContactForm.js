import React from "react";
import './contactForm.css'

const ContactForm = () =>{
    return (
        <form className="contactForm flex">
            <div className="formInputs flex">
                <div className="reminderInfoContainer">
                    <div className="inputContainer">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="reminder_name" />
                    </div>
                    <div className="inputContainer">
                        <label for="email">Correo</label>
                        <input type="email" id="email" name="reminder_email" />
                    </div>
                </div>
                <div className="reminderMessageContainer flex">
                    <label for="message">Mensaje</label>
                    <textarea name="reminder_message" id="message" ></textarea>
                </div>
            </div>
            <button type="submit" className="button">Envíe su mensaje</button>
        </form>
    )
}

export default ContactForm