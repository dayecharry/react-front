import "./breed.css";

function Breed({ breedUrl }) {
    return (
        <>
            <div>Breed</div>
            <section className="cardBreed">
                <img src={breedUrl} alt="" className="breedImg" />
            </section>
        </>
    )
}
export default Breed