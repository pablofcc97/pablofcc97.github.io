import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/elencuentroCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupElencuentro.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web ',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo utilizando la tecnologia de Wordpress y Woocommerce '} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'short'} mockup={MockupImg} link={'https://elencuentro.digitalcartas.com/'}/>
                        </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content