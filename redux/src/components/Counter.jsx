import { connect } from "react-redux"


function Counter({ count, increment, decrement }) {

    return (
        <div>
            <h2>Contador: {count} </h2>
            <button onClick={increment}>incrementar</button>
            <button onClick={decrement}>decrementar</button>
        </div>
    )
}
const stateToProps = (state) => ({
    count: state.count,
})
const dispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
})

export default connect(stateToProps, dispatchToProps)(Counter)