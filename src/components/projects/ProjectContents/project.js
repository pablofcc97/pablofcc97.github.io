import React from "react"
import './project.css'

const Project = ({description, children}) =>{
    return (
        <div className="projectContent">
            <p className="project__description">{description}</p>
            {children}
        </div>
    )
}

export default Project