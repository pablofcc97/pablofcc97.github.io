import React from "react";
import './contact.css'
import ContactForm from "../general/contactForm/ContactForm";
import SocialIcons from "../general/socialIcons/SocialIcons";

const Contact = () => {
    return(
        <section className="contact section " id="contacto">
            <div className="container">
                <h2 className="section__title">Contáctate conmigo</h2>
                <div className="contact__content grid">
                    <div className="contactForm__container">
                        <h3>Envíame un mensaje</h3>
                        <ContactForm/>
                    </div>
                    <div className="contactSocial__container">
                        <h3>O a traves de mis redes</h3>
                        <SocialIcons/>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Contact