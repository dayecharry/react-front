import { useEffect, useRef, useState } from "react"
import HookUseCallback from "./HookUseCallback";
import Counter from "./Counter";


function App() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0)
  const previewCount = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focusInput()
  }, [])

  const handleClick = () => {
    previewCount.current = count;
    setCount(count + 1)
  }
  return (
    <>

      <div>
        <h2>anacleta</h2>
        <h1>Al cargar la pagina aparezca el cursor en el input </h1>
        <input type="text" ref={inputRef} />
        <br></br>
        <button onClick={handleClick}>Incremente el contador</button>
        <h3>El valor anterior es {previewCount.current !== undefined ? previewCount.current : "N/A"}</h3>
        <h3>El valor actual es: {count}</h3>
      </div>

      <HookUseCallback />
      <Counter />

    </>
  )
}

export default App
