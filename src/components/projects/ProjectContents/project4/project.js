import React from "react"
import './project.css'
import TabTable from "../../../general/TabTable/TabTable"
import TabProjectContent from "../TabProjectContent"
import WebProjectPresentation from "../WebProjectPresentation"
import ProjectViewImg from '../../../../assets/projects/cemtCaptura.jpg'
import MockupImg from '../../../../assets/projects/mockupCemt.png'
import DesignsImg from '../../../../assets/projects/disenosCemt.png'

const Content = () =>{
    return (
        <TabTable 
            content={
                [
                    {
                        title:'Diseño y Desarrollo Web',
                        content:
                        <TabProjectContent 
                            description={'Diseño y desarrollo de la landing page y página de exito'} 
                        >
                            <WebProjectPresentation webViewImg={ProjectViewImg} height={'medium'} mockup={MockupImg} link={'https://comoempezarunatesis.com'}/>
                        </TabProjectContent>
                    },
                    {
                        title:'Diseño Gráfico Digital',
                        content:<TabProjectContent 
                                    description={'Diseño de anuncios publicitarios para facebook y google Ads'} 
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