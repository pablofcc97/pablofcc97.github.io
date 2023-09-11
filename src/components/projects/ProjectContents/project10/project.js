import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/bitacoraCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupBitacora.png'
import DesignsImg from '../../../../assets/projects/disenosTapif.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web ',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo del blog y los artículos en general'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'large'} mockup={MockupImg} link={'https://bitacorawp.com/'}/>
                        </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content