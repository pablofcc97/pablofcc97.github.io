import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/spssCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupSpss.png'
import PlataformImg1 from '../../../../assets/projects/spssPlataforma1.jpg'
import PlataformImg2 from '../../../../assets/projects/spssPlataforma2.jpg'
import PlataformImg3 from '../../../../assets/projects/spssPlataforma3.jpg'
import DesignsImg from '../../../../assets/projects/disenosSpss.png'
import  ExtraImg from '../../../../assets/projects/spssExtra.jpg'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                        <TabProjectContent 
                            description={'Diseño y desarrollo de la landing page y plataforma educativa'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://cursodespss.com'}/>
                        </TabProjectContent>
                    },
                    {
                        title:'Plataforma educativa',
                        content:<TabProjectContent 
                                    description={'Diseño y desarrollo de la plataforma educativa del curso'} 
                                    classes={'tab--platformProject'}
                                >
                                    <div className="tab__content flex">
                                        <div className="">
                                            <img src={PlataformImg1} alt="" />
                                            <p className="imageDescription">Acceso</p>
                                        </div>
                                        <div className="">
                                            <img src={PlataformImg2} alt="" />
                                            <p className="imageDescription">Curso</p>
                                        </div>
                                        <div className="">
                                            <img src={PlataformImg3} alt="" />
                                            <p className="imageDescription">Lección</p>
                                        </div>
                                    </div>
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