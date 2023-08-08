import React, {useState, useEffect, useContext} from "react";
import './tabTable.css'
import PositionContext from "../../../positionContext";
import Tab from './tab/Tab'
import Content from './Content/Content'

const TabTable = ({content}) => {

    const position = useContext(PositionContext)[0]
    
    const [activeTab, setActiveTab] = useState(0)
    if(activeTab > content.length) setActiveTab(0)

    useEffect(() => {
        setActiveTab(0);
    },[position])

    return(
        <div className="tabTable">
            <div className="tabTable__tabs flex">
                {content.map(
                    (e,i)=><Tab title={e.title} key={i} className={`${activeTab===i ?'tab--active' :''}`} event={()=>setActiveTab(i)} />
                )}
            </div>
            <div className="tabTable__content grid">
                {content.map(
                    (e,i)=><Content key={i} content={e.content} className={`${activeTab===i ?'content--active' :''}`}></Content>
                )}
            </div>
        </div>
    )
}

export default TabTable