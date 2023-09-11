import React from "react";
import './studies.css'
import Studie from './studie/Studie'

const Studies = () => {
    return(
        <section className="studies section section--alter">
            <div className="container">
                <h2 className="section__title">Mi historial académico</h2>
                <div className="studies__content">
                    <Studie title={'FullStackOpen'} period={'(2023 - Actualmente)'}  
                            content={<p>Curso de programación web moderna con el stack MERN. 
                                Ofrecida gratuitamente por la universidad de Helsinki Finlandia</p>}
                    />
                    <Studie title={'Código By Tecsup'} period={'(2022 - 2022)'} alter={true}
                            content={<p>Curso de especilización en programación con el framewrok Laravel</p>}
                    />
                    <Studie title={'ED Team'} period={'(2021 - 2022)'}  
                            content={
                                <div>
                                    <p>Cursos cortos sobre: Desarrolo Wordpress, Diseño UI, SEO y CSS3</p>
                                </div>
                            }
                    />
                    <Studie title={'I.E.S.T.P Pedro P. Diaz'} period={'(2018 - 2020)'} alter={true}
                            content={<p>Carrera técnica de Computación e Informática </p>}
                    />
                </div>
            </div>
        </section>
    )
}

export default Studies