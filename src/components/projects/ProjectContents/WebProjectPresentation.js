import React from "react";
import './webProjectPresentation.css'
import WebProjectView from '../../general/webProjectView/WebProjectView'

const WebProjectPresentation = ({webViewImg, height, mockup, link}) => {
    return(
        <div className="webProjectPresentation flex">
            <div className="webProject__content flex">
                <div className="webProject__Preview">
                    <WebProjectView img={webViewImg} height={height}/>
                    <p className="imageDescription">Vista previa de la página</p>
                </div>
                <div className="webProject__mockup">
                    <img src={mockup} alt="" />
                    <p className="imageDescription">Vista responsive de la página</p>
                </div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="button">Ve el proyecto</a>
        </div>
    )
}

export default WebProjectPresentation

