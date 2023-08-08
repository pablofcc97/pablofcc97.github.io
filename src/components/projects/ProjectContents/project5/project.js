import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/josesupoCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupJoseSupo.png'
import BlogImg from '../../../../assets/projects/joseSupoBlog.jpg'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                        <TabProjectContent 
                            description={'Diseño y desarrollo del sitio web, blog de noticias e integración a google Adsense'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://josesupo.com'}/>
                        </TabProjectContent>
                    },
                    {
                        title:'Blog del sitio',
                        content:<TabProjectContent 
                                    description={'Diseño y desarrollo del blog del sitio '} 
                                >
                                    <div className="blogProject__content flex">
                                        <div >
                                            <img src={BlogImg} alt="" />
                                            <p className="imageDescription">Captura del blog</p>
                                        </div>
                                    </div>
                                </TabProjectContent>
                    }
                ]
            }
        />
    )
}

export default Content