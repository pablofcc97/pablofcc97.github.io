import React from "react";
import './services.css'
import Card from '../general/card/Card'
import DesignIcon from '../../assets/diseno.svg'
import WordpressIcon from '../../assets/wordpress.svg'
import CodeIcon from '../../assets/code.svg'

const Services = () => {
    return(
        <section className="services section section--alter" id="servicios">
            <div className="container">
                <h2 className="section__title">¿Que puedo hacer por ti?</h2>
                <div className="services__cards flex">
                    <Card 
                        icon={DesignIcon} 
                        title={'Diseño gráfico digital'} 
                        text={'Banners y publicidad digital para redes sociales. Tambien diseño sitios, aplicaciones y tiendas web. Con un diseño moderno y acorde a lo que tu marca desee comunicar.'}> 
                    </Card>
                    <Card 
                        icon={CodeIcon} 
                        title={'Desarrollo web'} 
                        text={'Sitios, aplicaciones y tiendas web. Utilizando tecnologías modernas y escalables garantizando un producto de calidad y acorde a tus necesidades.'}> 
                    </Card>
                    <Card 
                        icon={WordpressIcon} 
                        title={'Desarrollo Wordpress'} 
                        text={'Diseño e implemento sitios y tiendas web. Soluciono problemas tecnicos e infecciones en sitios desarrollados con wordpress. Optimizo la velocidad de carga.'}> 
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Services