import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/wikipelisCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupWikipelis.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web ',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo utilizando la tecnologia de REACT y consumo de apis '} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'short'} mockup={MockupImg} link={'https://pablofcc97.github.io/wikipelis/'}/>
                        </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content