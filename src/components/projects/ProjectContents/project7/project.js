import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/sinceCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupSincie.png'
import DesignsImg from '../../../../assets/projects/disenosSincie.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                        <TabProjectContent 
                            description={'Diseño y desarrollo de la landing page y acceso a la plataforma virtual'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'short'} mockup={MockupImg} link={'https://sincie.com'}/>
                        </TabProjectContent>
                    },
                    {
                        title:'Diseño Gráfico Digital',
                        content:<TabProjectContent 
                                    description={'Diseño de portada para youtube y facebook'} 
                                >
                                    <img src={DesignsImg} alt="" className="designProject__img" />
                                </TabProjectContent>
                    }
                ]
            }
        />
    )
}

export default Content