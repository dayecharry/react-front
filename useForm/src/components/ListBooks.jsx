import { useContext } from "react"
import { LibroContext } from "./Context/libroContext"


function ListBooks() {
    const { libros, agregaFav } = useContext(LibroContext)

    const handleFav = (ev) => {
        /*
        console.log(ev.target.id) --> el elemento donde ocurrio el evento
        console.log(ev.currentTarget.id) -> el elemento sobre el que se escuchar
        */
        agregaFav(ev.currentTarget.id)
    }

    return (
        <>
            <div>ListBooks</div>
            {libros.length > 0 && libros.map((libro, i) => {
                return (
                    <article key={i}>
                        <img src={libro.img} />
                        <h3>{libro.titulo}</h3>
                        <p>{libro.sinopsis}</p>
                        <p id={libro.id} className="heart" onClick={handleFav}>
                            <i className="fa-solid fa-heart"></i>
                        </p>
                    </article>
                )
            })
            }
        </>
    )
}

export default ListBooks