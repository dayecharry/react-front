import { createStore } from "redux";
/* state={
    count:0,
    error:"",
    topeCount: 10
    lista: []
    }
*/
//reducers 

const initialState = {
    count: 0,
    tasks: []
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "ADDTASK":
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: Date.now(),
                    completed: false,
                    title: action.payload
                }]
                //tasks.push({ completed: false, title: action.payload })
            }
        case "CHANGETASK":
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === parseInt(action.payload) ? { ...task, completed: !task.completed } : task)
            }
        // modifico  la propiedad completed de  false a true, cuando el usuario haya hecho click en  el checkbox
        default:
            return state;
    }
}
const store = createStore(counterReducer)

export default store