import React, {useState} from "react";
import './messageBox.css'

const Toast = ({text, purpose}) => {
    return (
        <div className={purpose + ' toast'} >
            <p className="toast__message">{text}</p>
        </div>
    )
}

export default Toast