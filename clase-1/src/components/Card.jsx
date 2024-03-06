

function Card({ data }) {
    return (
        <article>
            <img src={data.urlImage} alt="" />
            <h3>Nombre: {data.name}</h3>
            <h3>Propietario: {data.owner}</h3>
        </article>
    )
}

export default Card