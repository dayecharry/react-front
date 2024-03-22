import { useState } from "react"
import { connect } from "react-redux"


function Tasks({ tasks, addtask, changeTask }) {

    const [newTask, setNewTask] = useState("")

    const handleInput = (ev) => {
        setNewTask(ev.target.value)
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        addtask(newTask)
    }

    //obtengo el id de la tarea clicada
    const handleCheckbox = (ev) => {
        console.log(ev.target.id)
        changeTask(ev.target.id)
    }

    return (
        <div>
            <form action="">
                <input type="text" onChange={handleInput} value={newTask} />
                <button onClick={handleClick}>Agregar Tarea</button>
            </form>

            <h4>Listado de tareas</h4>
            <ul>
                {tasks.map((task, i) => (
                    // al li le añadimos la clase item siempre,  y luego si la propiedad completed es true  añadimos "tachado"
                    <li key={i} className={`item ${task.completed ? "tachado" : null}`}>
                        <input type="checkbox" onChange={handleCheckbox} id={task.id} />
                        {task.title}
                    </li>))}
            </ul>
        </div>
    )
}

//obtenemos los datos del store
const stateToProps = state => ({
    tasks: state.tasks
})

// obtenemos las funciones de definidas en los reducers
const dispatchToProps = dispatch => ({
    addtask: title => dispatch({
        type: "ADDTASK", payload: title
    }),
    changeTask: id => dispatch({ type: "CHANGETASK", payload: id })
})

// nos conectamos con el store
export default connect(stateToProps, dispatchToProps)(Tasks)