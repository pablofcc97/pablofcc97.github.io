import React from "react"
import ArrowLink from '../link/ArrowLink'
import './card.css'

const Card = ({icon, title, text}) => {
    return(
        <div className="card">
            <div className="card__iconContainer flex">
                <img src={icon} alt="" className="card__icon"/>
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__text">
                {text}
            </p>
            <ArrowLink link={'#proyectos'} text={'Ver Proyectos'}></ArrowLink>
        </div>
    )
}

export default Card