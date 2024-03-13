import { useEffect, useState } from "react"
import axios from "axios";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Nav from "./Nav";
import Profile from "./Profile";
import DetailLanguage from "./DetailLanguage";
/*
Variables de estados
1.-  Formularios (inputs, select, textarea)
2.-  Cuando llegan los datos de la API

useEffect ()
1.- Cuando quieres controlar un bloque de código, se ejecuta N cantidad de veces, que no este relacionado con el renderizado del componente  
  (1.-> [] la primera vez que carga la pag
   2.- [varEstado] se ejecutara cada vez que la variable de estado cambie
    )
*/

function App() {
  const userList = [
    {
      id: 123,
      email: 'anacleta@upgrade.com',
      password: '123456',
      name: 'Ana',
      role: 'admin',
      bootcamp: "front-end"
    },
    {
      id: 456,
      email: 'perensejo@upgrade.com',
      password: '987456',
      name: 'Pablo',
      role: 'client',
      bootcamp: "back-end"
    },
  ];

  const [pet, setPet] = useState("fifi");
  const [listImg, setListImg] = useState([]);
  const [count, setCount] = useState(0)

  //https://dog.ceo/api/breeds/image/random/3
  //https://hp-api.onrender.com/api/characters

  useEffect(() => {
    /*axios.get("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => {
        setListImg(response.data.message)
      })*/
    axios("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => {
        setListImg(response.data.message)
      }, (error) => {
        console.log(error)
      }
      )

  }, [])

  useEffect(() => {
    setTimeout(() => {
      //setCount(count + 1)
      console.log("HOlis, soy un temporizador")
    }, 3)
  }, [listImg])

  //web spa


  return (
    <>

      <div>
        <h1>Mascota {pet} </h1>

        <Nav />

        <Routes>
          <Route path="/" element={<Home listImg={listImg} listUser={userList} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:iduser" element={<Profile userList={userList} />} />
          <Route path="/language/:id" element={<DetailLanguage />} />

        </Routes>


        <a href="https://axios-http.com/es/docs/intro">info axios</a>

      </div>

    </>
  )
}

export default App
