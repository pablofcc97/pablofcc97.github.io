import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectPresentation from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/tapifCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupTapif.png'
import DesignsImg from '../../../../assets/projects/disenosTapif.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content: 
                        <TabProjectPresentation 
                            description={'Diseño y desarrollo de la carta de ventas'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://tallerdetesis.com/carta'}/>
                        </TabProjectPresentation>
                    },
                    {
                        title:'Diseño Gráfico Digital',
                        content:<TabProjectPresentation 
                                    description={'Diseño de anuncios publicitarios para facebook y google Ads'} 
                                >
                                    <img src={DesignsImg} alt="" className="designProject__img" />
                                </TabProjectPresentation>
                    }
                ]
            }
        />
    )
}

export default Content