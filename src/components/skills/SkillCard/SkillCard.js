import React from "react";
import './skillCard.css'
import Skill from './skill/skill'

const skillCard = ({skills, className, title}) => {
    
    return (
        <div className={`skillCard ${className}`}>
            <h3 className="skillCard__title">{title}</h3>
            <div className="skillIconsList flex">
                {skills.map((e)=><Skill key={e.name} skill={e}></Skill>)}
            </div>
        </div>
    )
}

export default skillCard