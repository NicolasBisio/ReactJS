import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar__color">
            <div className="container-fluid">
                <a className="navbar-brand navbar__logo" href="./index.html"><img src={logo} alt="logoAnmai"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="header__nav--a active" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="header__nav--a" href="./paginas/amigurumis.html">Amigurumis</a>
                        </li>
                        <li className="nav-item">
                            <a className="header__nav--a" href="./paginas/galeria.html">Galería</a>
                        </li>
                        <li className="nav-item">
                            <a className="header__nav--a" href="./paginas/nosotros.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="header__nav--a" href="./paginas/contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>

                <div className="contenedor-carrito">
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;