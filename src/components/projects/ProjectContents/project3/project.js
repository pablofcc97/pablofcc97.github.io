import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import WebProjectView from "../../../general/webProjectView/WebProjectView"
import ProjectViewImg from '../../../../assets/projects/bioestadisticoCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupBioestadistico.png'
import BlogImg from '../../../../assets/projects/bioestadisticoBlog.jpg'
import AdsenseImg from '../../../../assets/projects/bioestadisticoAdsense.jpg'
import ExtraImg from '../../../../assets/projects/bioestadisticoExtra.jpg'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                            <TabProjectContent 
                                description={'Diseño y desarrollo del sitio institucional'} 
                            >
                                <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://bioestadistico.com'}/>
                            </TabProjectContent>
                    },
                    {
                        title:'Blog y Adsense',
                        content:<TabProjectContent 
                                    description={'Diseño y desarrollo del blog del sitio e integración con Google Adsense'} 
                                >
                                    <div className="blogProject__content flex">
                                        <div >
                                            <img src={BlogImg} alt="" />
                                            <p className="imageDescription">Captura del blog</p>
                                        </div>
                                        <div >
                                            <img src={AdsenseImg} alt="" />
                                            <p className="imageDescription">Anuncios de Google</p>
                                        </div>
                                    </div>
                                </TabProjectContent>
                    },
                    {
                        title:'Extras',
                        content:<TabProjectContent 
                                    description={'Diseño de brochure del programa principal'}
                                    classes={'tab--extra'} 
                                >
                                    <WebProjectView img={ExtraImg} height={'large'}/>
                                    <p className="imageDescription">Vista previa del brochure</p>
                                </TabProjectContent>
                    },
                ]
            }
        />
    )
}

export default Content