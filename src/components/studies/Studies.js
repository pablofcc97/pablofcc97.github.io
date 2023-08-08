import React from "react";
import './studies.css'
import Studie from './studie/Studie'

const Studies = () => {
    return(
        <section className="studies section section--alter">
            <div className="container">
                <h2 className="section__title">Mi historial académico</h2>
                <div className="studies__content">
                    <Studie title={'I.E.S.T.P Pedro P. Diaz'} period={'(2018 - 2020)'} 
                            content={<p>Como técnico titulado en Computación e Informática </p>}
                    />
                    <Studie title={'ED Team'} period={'(2021 - 2022)'}  alter={true}
                            content={
                                <div>
                                    <p>Cursos de: </p>
                                    <ul>
                                        <li>Diseño UI</li>
                                        <li>HTML5</li>
                                        <li>Css3</li>
                                    </ul>
                                </div>
                            }
                    />
                    <Studie title={'Código By Tecsup'} period={'(2022 - 2022)'} 
                            content={<p>Curso de especilización en programación con Laravel</p>}
                    />
                    <Studie title={'FullStackOpen'} period={'(2023 - Actualmente)'}  alter={true}
                            content={<p>Curso de programación web moderna con el stack MERN. 
                                Ofrecido por la universidad de Helsinki Finlandia</p>}
                    />
                </div>
            </div>
        </section>
    )
}

export default Studies