import React, {useState} from "react";
import './hero.css'
import Foto from '../../assets/Pablo Fabian Cuba Chacon.png'
import SocialIcons from "../general/socialIcons/SocialIcons";
import CV from '../../assets/cv Pablo Fabian Cuba Chacon.pdf'

const Hero = () => {

    return(
        <section className="hero section" id="inicio">
            <div className="container flex">
                <div className="hero__info flex">
                    <div className="hero__info__presentation">
                        <div className="hero__presentation__greeting flex">
                            <span className="presentation__greeting__hi">Hola</span>
                            <span className="presentation__greeting__iam">Soy</span>
                        </div>
                        <h1 className="hero__presentation__name"><span>Pablo Fabian </span><span> Cuba Chacón</span></h1>
                        <span className="hero__presentation__ocupation">Técnico Computación e Informática - Web developer junior</span>
                    </div>
                    <div className="hero__info__contact">
                        <SocialIcons/>
                        <span className="hero__contact__mail">pablofcc97@gmail.com</span>
                        <a href={CV} className="button hero__contact__cv" target="_blank" rel="noreferrer">Descargar CV</a>
                    </div>
                </div>
                <img src={Foto} alt="" className="hero__photo" />
            </div>
        </section>
    )
}

export default Hero