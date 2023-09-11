import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/siproCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupSipro.png'
import DesignsImg from '../../../../assets/projects/disenosSipro .png'
import ExtraImg from '../../../../assets/projects/siproExtra.jpg'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content:<TabProjectContent 
                                    description={'Diseño y desarrollo de la carta de ventas para el lanzamiento'} 
                                >
                                    <WebProjectPresentation webViewImg={ProjectViewImg} height={'large'} mockup={MockupImg} link={'https://seminariosdeinvestigacion.com/3-0'}/>
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
                                    description={'Diseño del certificado del curso'} 
                                >
                                    <img src={ExtraImg} alt="" className="extraProject__img" />
                                </TabProjectContent>
                    },
                ]
            }
        />
    )
}

export default Content