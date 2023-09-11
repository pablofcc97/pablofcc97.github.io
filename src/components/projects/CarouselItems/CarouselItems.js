import React from "react";
import CarouselItem from './singleItem/CarouselItem'

/*===IMAGES PROJECT MOCKUPS===*/
import SiproMockup from '../../../assets/carouselProjects/proyectoSIPRO.png'
import DiploMockup from '../../../assets/carouselProjects/proyectoDiplomado.png'
import BioestadisticoMockup from '../../../assets/carouselProjects/bioestadistico.png'
import CemtMockup from '../../../assets/carouselProjects/proyectoCemt.png'
import JoseSupoMockup from '../../../assets/carouselProjects/josesupo.png'
import KinderMockup from '../../../assets/carouselProjects/kinder.png'
import SincieMockup from '../../../assets/carouselProjects/sincie.png'
import SpssMockup from '../../../assets/carouselProjects/proyectoSpss.png'
import TapifMockup from '../../../assets/carouselProjects/proyectoTapif.png'
import BitacoraMockup from '../../../assets/carouselProjects/bitacoraWP.png'
/*===IMAGES PROJECT LOGOS===*/
import BitacoraLogo from '../../../assets/carouselProjects/bitacoraWP__banner.jpg'
import SiproLogo from '../../../assets/carouselProjects/sipro__banner.jpg'
import DiploLogo from '../../../assets/carouselProjects/diplo__banner.jpg'
import BioestadisticoLogo from '../../../assets/carouselProjects/bioestadistico__banner.jpg'
import CarlSaganLogo from '../../../assets/carouselProjects/carlSagan__banner.jpg'
import CemtLogo from '../../../assets/carouselProjects/cemt__banner.jpg'
import JoseSupoLogo from '../../../assets/carouselProjects/joseSupo__banner.jpg'
import SincieLogo from '../../../assets/carouselProjects/sincie__banner.jpg'
import SpssLogo from '../../../assets/carouselProjects/spss__banner.jpg'
import TapifLogo from '../../../assets/carouselProjects/tapif__banner.jpg'

const carousel =[
    <CarouselItem logo={BitacoraLogo}  mockup={BitacoraMockup} />,
    <CarouselItem logo={SiproLogo}  mockup={SiproMockup} />,
    <CarouselItem logo={DiploLogo}  mockup={DiploMockup} />,
    <CarouselItem logo={BioestadisticoLogo}  mockup={BioestadisticoMockup} />,
    <CarouselItem logo={CemtLogo}  mockup={CemtMockup}  />,
    <CarouselItem logo={JoseSupoLogo}  mockup={JoseSupoMockup} />,
    <CarouselItem logo={CarlSaganLogo}  mockup={KinderMockup}  />,
    <CarouselItem logo={SincieLogo}  mockup={SincieMockup}  />,
    <CarouselItem logo={SpssLogo}  mockup={SpssMockup}/>,
    <CarouselItem logo={TapifLogo}  mockup={TapifMockup} />
]


export default carousel 