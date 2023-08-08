import React from "react";
import './studie.css'
import StudieLine from "./studieLine/StudieLine";

const Studie = ({title, period, content, alter}) => {
    return(
        <div className={`studie grid ${alter?'studie--alter' :''}`}>
            <div className="studieInfo">
                <div className="studie__titles flex">
                    <h4 className="studie__title">{title}</h4>
                    <span className="studie__period">{period}</span>
                </div>
                {content}
            </div>
            <StudieLine/>
            <div className="column--empty"></div>
        </div>
    )
}

export default Studie