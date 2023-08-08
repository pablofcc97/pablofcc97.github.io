import React from "react";
import './tabProjectContent.css'

const TabProjectContent = ({description, children, classes}) => {
    return (
        <div className={`tabProject flex ${classes}`}>
            <p className="tabProject__description">{description}</p>
            {children}
        </div>
    )  
}

export default TabProjectContent