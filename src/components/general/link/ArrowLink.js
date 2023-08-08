import React from "react";
import './ArrowLink.css'
import ArrowImage from '../../../assets/arrowRight.svg'

const ArrowLink = ({link, text}) => {
    return(
        <a href={link} className="arrowLink flex">
            {text}
            <img src={ArrowImage} alt="" className="arrowLink__icon" />
        </a>
    )
}

export default ArrowLink