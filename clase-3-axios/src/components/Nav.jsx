import { Link } from "react-router-dom"


function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/contact"> Contacto</Link>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Nav