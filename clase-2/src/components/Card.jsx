function Card({ book }) {



    return (
        <div>
            <h3>Titulo: {book.title} </h3>
            <p>Autor:  {book.author}</p>
            <small> Año de publicación: {book.year}</small>
        </div>
    )
}
export default Card