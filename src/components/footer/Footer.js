import React from "react"
import './footer.css'

const Footer = () => {
    return(
        <footer className="footer section">
            <div className="container flex">
                <div className="footer__logo flex">
                    <span className="footer__logo__name">Pablo Cuba</span>
                    <span className="footer__logo__ocupation">Desarrollador web</span>
                </div>
                <p className="rights">Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer