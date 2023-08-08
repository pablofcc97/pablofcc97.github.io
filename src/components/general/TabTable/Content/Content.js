import React from "react";
import './content.css'

const Content = ({content, className}) => {
    return(
        <div className={`Tab__content ${className}`}>
            {content}
        </div>
    )
}

export default Content