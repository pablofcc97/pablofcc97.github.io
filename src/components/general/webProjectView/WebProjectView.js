import React from "react";
import './webProjectView.css'


const WebProjectView = ({img, height}) => {
    return(
        <div className="webProjectView flex">
            <div className={`webProjectView__img ${'webProjectView__img--'+height}`} style={{backgroundImage: `url(${img})`}} ></div>
        </div>
    )
}

export default WebProjectView