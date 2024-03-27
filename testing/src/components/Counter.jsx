import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
            <h2>Contador: {count}</h2>
        </div >
    )
}

export default Counter