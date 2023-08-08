import React from "react";
import './skill.css'

const skill = ({skill}) => {
    return (
        <div className="skill flex">
            <img src={skill.icon} alt="" className="skill__icon" />
            <span className="skill__name">{skill.name}</span>
        </div>
    )
}

export default skill