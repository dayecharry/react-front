import "../styles/header.css"
function Header() {
    return (
        <header  >
            <h1 className="title">Cabecera de la web</h1>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;