import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectView from "../../../general/webProjectView/WebProjectView"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/diplomadoCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupDiplomado.png'
import DesignsImg from '../../../../assets/projects/disenosDiplomado.png'
import ExtraImg from '../../../../assets/projects/diplomadoExtra.jpg'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content:
                            <TabProjectContent
                                description={'Diseño y desarrollo de la landing page, página de registro y página de agradecimiento'} 
                            >
                                <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://diplomadoeninvestigacion.com'}/>
                            </TabProjectContent>
                    },
                    {
                        title:'Diseño Gráfico Digital',
                        content:<TabProjectContent 
                                    description={'Diseño de anuncios publicitarios para facebook y google Ads'} 
                                >
                                    <img src={DesignsImg} alt="" className="designProject__img" />
                                </TabProjectContent>
                    },
                    {
                        title:'Extras',
                        content:<TabProjectContent 
                                    description={'Diseño de brochure del programa'}
                                    classes={'tab--extra'} 
                                >
                                    <WebProjectView img={ExtraImg} height={'extralarge'}/>
                                    <p className="imageDescription">Vista previa del brochure</p>
                                </TabProjectContent>
                    },
                ]
            }
        />
    )
}

export default Content