import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/kinderCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupKinder.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo de la landing page'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://carlsagankinder.com'}/>
                        </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content