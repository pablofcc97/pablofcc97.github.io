import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/digitalcartasCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupDigitalcartas.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web ',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo utilizando la tecnologia de Wordpress'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'extralarge'} mockup={MockupImg} link={'https://digitalcartas.com/'}/>
                        </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content