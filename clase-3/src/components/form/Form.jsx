
function Form({ handleBreed }) {

    const handleChange = (ev) => {
        handleBreed(ev.target.value)
    }

    return (
        <div>
            <label htmlFor="breed">Seleccione una raza</label>
            <select name="" id="breed" onChange={handleChange}>
                <option value="">Seleccione</option>
                <option value="shiba">Shiba</option>
                <option value="boxer">Boxer</option>
                <option value="akita">Akita</option>
            </select>
        </div>
    )
}

export default Form