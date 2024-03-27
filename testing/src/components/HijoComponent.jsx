

function HijoComponent({ change }) {


    const handleInput = (ev) => {
        change(ev.target.value)
    }

    return (
        <div>HijoComponent<br></br>
            {/* <input type="text" onChange={(e) => { change(e.target.value) }} /> */}
            <input type="text" onChange={handleInput} />
        </div>
    )
}

export default HijoComponent