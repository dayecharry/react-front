import defaultImage from "../../images/character.jpeg";

function Character({ char }) {
    return (
        <article>
            <img src={char.image ? char.image : defaultImage} alt="" />
            <h4>Nombre: {char.name}</h4>
            <h5>Especie: {char.species}</h5>
        </article>
    )
}

export default Character