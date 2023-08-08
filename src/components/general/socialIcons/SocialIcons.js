import React from "react";
import './socialIcons.css'
import GithubImage from '../../../assets/github.svg'
import Linkedinimage from '../../../assets/linkedin.svg'
import MailImage from '../../../assets/mail.svg'
import WhatsappImage from '../../../assets/whatsapp.svg'

const SocialIcons = () => {
    return(
        <div className="socialIcons flex">
            <a href="https://pe.linkedin.com/in/pablo-cuba-chacon-2b3227168" target="_blank" className="socialIcon__link">
                <img src={Linkedinimage} alt="" rel="noreferrer" className="socialIcon__img" />
            </a>
            <a href="https://github.com/pablofcc97" target="_blank" className="socialIcon__link">
                <img src={GithubImage} alt="" rel="noreferrer" className="socialIcon__img" />
            </a>
            <a href="https://wa.me/51921736454?text=Hola%20vengo%20de%20tu%20portafolio%20" target="_blank" className="socialIcon__link">
                <img src={WhatsappImage} alt="" rel="noreferrer" className="socialIcon__img" />
            </a>
            <a href="mailto:pablofcc97@gmail.comsubject=Portafolio Pablo Cuba&body=Hola%20vengo%20de%20tu%20portafolio%20" target="_blank" className="socialIcon__link">
                <img src={MailImage} alt="" rel="noreferrer" className="socialIcon__img" />
            </a>
        </div>
    )
}

export default SocialIcons