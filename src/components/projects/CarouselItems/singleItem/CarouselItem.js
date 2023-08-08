import React from "react";
import './carouselItem.css'

const Carousel = ({logo, mockup}) => {
    return(
        <div className="carousel__item flex">
            <img src={logo} alt="" className="carousel__project__banner" />
            <img src={mockup} alt="" className="project__views" />
        </div>
    )
} 
export default Carousel