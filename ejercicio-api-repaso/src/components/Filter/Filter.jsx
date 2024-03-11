

function Filter({ changeHouse, house }) {

    const handleRadio = (ev) => {
        changeHouse(ev.target.value)
    }
    return (
        <div>
            <label htmlFor="">Seleccione la casa </label> <br />
            <input type="radio" name="house" value="Gryffindor" onChange={handleRadio} checked={house === "Gryffindor"} />Gryffindor
            <input type="radio" name="house" value="Hufflepuff" onChange={handleRadio} checked={house === "Hufflepuff"} />Hufflepuff
            <input type="radio" name="house" value="Ravenclaw" onChange={handleRadio} checked={house === "Ravenclaw"} />Ravenclaw
            <input type="radio" name="house" value="Slytherin" onChange={handleRadio} checked={house === "Slytherin"} />Slytherin
        </div>
    )
}

export default Filter