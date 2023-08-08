import React from "react";
import './tab.css'

const Tab = ({title, className, event}) => {
    return(
        <div className={`tab before ${className}`} onClick={event}><span>{title}</span></div>
    )
}

export default Tab