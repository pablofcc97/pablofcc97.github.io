import React from "react";
import './carouselItem.css'

const Carousel = ({logo, mockup, link}) => {
    return(
        <div className="carousel__item flex">
            <a href={link} target="_blank" rel="noreferrer" className="button project__link">Ir al proyecto</a>
            <img src={logo} alt="" className="carousel__project__banner" />
            <img src={mockup} alt="" className="project__views" />
        </div>
    )
} 
export default Carousel