import React, {useState, useRef} from "react"
import './header.css'
import MenuIcon from '../../assets/menuIcon.svg'
import MenuIconWhite from '../../assets/menuIcon--white.svg'
//const LastScroll = 0

const Header = () => {
    const [Toggled, setToggled] = useState(false)
    const [Resized, setResized] = useState(false)
    const [Hide, setHide] = useState(false)
    const [lastScroll, setLastScroll] = useState(0)

    const isScrollingUp = () => lastScroll>window.scrollY

    const TogleNav = () =>{
        setToggled(()=>!Toggled)
        setResized(false)
    }
    const headerAnimation = () => {
        if(window.scrollY<=100 || Toggled) {
            setHide(false)
            setResized(false)
            return
        }
        setResized(true)
        if(isScrollingUp()) setHide(false)
        if( !isScrollingUp()) setHide(true)
        setLastScroll(window.scrollY)
    }

    window.addEventListener('scroll', headerAnimation)
   
    return(
        <div className={`section header flex ${Toggled ?' header--toggled' :''}${Resized ?' header--resized' : ''} ${Hide ?' header--hide' : ''}`}>
            <div className='container flex' >
                <div className="logo" >
                    <span className="logo__icon">Pablo Cuba</span>
                </div>
                <nav className={Toggled ?'nav nav--toggled' :'nav'}>
                    <ul className="nav__items flex">
                        <li className="nav__item">
                            <a href="#inicio" className="nav__link before">Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#servicios" className="nav__link before">Servicios</a>
                        </li>
                        <li className="nav__item">
                            <a href="#habilidades" className="nav__link before">Habilidades</a>
                        </li>
                        <li className="nav__item">
                            <a href="#proyectos" className="nav__link before">Proyectos</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contacto" className="nav__link before">Contáctame</a>
                        </li>
                    </ul>
                </nav>
                <div className="nav__toggle" onClick={()=>TogleNav()}>
                    <img src={MenuIcon} alt="" className={Toggled ?'nav__toggle__img--hidden' :'nav__toggle__img'} />
                    <img src={MenuIconWhite} alt="" className={Toggled ?'nav__toggle__img' :'nav__toggle__img--hidden'} />
                </div>
            </div>
        </div>
    )
} 

export default Header