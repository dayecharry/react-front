import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const { data, error } = useFetch("https://hp-api.onrender.com/api/characters/staff")

  const hechizos = useFetch("https://hp-api.onrender.com/api/spells")

  const [addDataLocal, deleteDataLocal, value] = useLocalStorage("student")

  useEffect(() => {
    addDataLocal("Nerea");
  }, [])

  const handleClick = () => {
    deleteDataLocal()
  }

  return (
    <>

      <div>
        <p> Bienvenido {value}</p>
        <h1>Custom Hooks, </h1>
        <ul>
          {data ? data.map((item, i) => <li key={i}>{item.name} </li>) : null}
        </ul>

        <h2>Hechizos</h2>
        <ul>
          {hechizos.data ? hechizos.data.map((item, i) => <li key={i}>{item.name}</li>) : null}
        </ul>
        <button onClick={handleClick}>Borrar LocalStorage</button>

      </div>

    </>
  )
}

export default App
