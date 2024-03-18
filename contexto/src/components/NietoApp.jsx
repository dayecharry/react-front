import { useContext, useState } from "react"
import Main from "./Main"
import { UserContext } from "./context/userContext"


function NietoApp() {
    const context = useContext(UserContext)
    const [student, setStudent] = useState("")


    const handleInput = ((ev) => {
        setStudent(ev.target.value)
    })

    const handleClick = (ev) => {
        ev.preventDefault()
        context.addStudent(student)
    }
    return (
        <div>
            NietoApp
            <ul>
                {
                    context.student.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>

            <form>
                <input type="text" placeholder="Indica el nombre del estudiante" value={student} onChange={handleInput} />
                <input type="submit" value="Añadir estudiante" onClick={handleClick} />
            </form>

            <Main />
        </div>
    )
}

export default NietoApp