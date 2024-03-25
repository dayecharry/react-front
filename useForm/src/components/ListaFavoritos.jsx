import { useContext } from "react"
import { LibroContext } from "./Context/libroContext"


function ListaFavoritos() {
    const { librosFav } = useContext(LibroContext)
    return (
        <div>
            <ul>
                {librosFav.map((item) => <li key={item.id}>{item.titulo}</li>)}
            </ul>
        </div>
    )
}

export default ListaFavoritos