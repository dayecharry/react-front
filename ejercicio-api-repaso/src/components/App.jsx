import { useEffect, useState } from "react"
import api from "../services/api"
import Character from "./Character/Character";
import Filter from "./Filter/Filter";

function App() {

  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState("Gryffindor");

  useEffect(() => {
    const getData = async () => {
      const dataCharacters = await api.getDataHouse(house);
      setCharacters(dataCharacters)
    }
    getData()
  }, [house])

  const changeHouse = (value) => {
    setHouse(value)
  }

  return (
    <>
      <div>
        <h1>Harry potter</h1>

        <Filter changeHouse={changeHouse} house={house} />
        <ul>
          {characters.map((item) => <li key={item.id}>
            <Character char={item} />
          </li>)}
        </ul>
      </div>

    </>
  )
}
export default App
