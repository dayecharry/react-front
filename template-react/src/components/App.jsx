import { useState } from "react";
import icono from "../images/icono.png"
import Button from "./Button";
import Card from "./Card";
import Header from "./Header";

function App() {

  //useState(), variables de estados

  const [name, setName] = useState("Petra")
  const [age, setAge] = useState(0);

  //comentario
  const sayHi = () => {
    console.log("holiss")
  }
  const animal = {
    name: "Oreo",
    urlImage: "https://cdn.pixabay.com/photo/2020/11/21/17/20/dog-5764666_1280.jpg",
    owner: "Maricarmen"
  }
  const handleName = (ev) => {
    setName(ev.target.value); // asincrono, tarda en  hacerlo
    console.log(name) // no consolear variables de estado al cambiarlas, porque el proceso es asincrono
  }

  const handleAge = (ev) => {
    setAge(ev.target.value)
  }

  return (
    <>
      <Header />
      <div>
        <h1>Template react </h1>
      </div>
      <div>
        <label htmlFor="name"> Indica tu nombre</label>
        <input id="name" type="text" placeholder="Example: maricarme" onChange={handleName} />
      </div>

      <div>
        <label htmlFor="age"> Indica tu edad</label>
        <input id="age" type="text" placeholder="Example: 88" onChange={handleAge} />
      </div>

      {/*  eventos: onInput, onClick, onChange, onKeyup */}
      <Button valueButton="Haga click" color="btn-danger" />
      <Button valueButton="Cerrar sesion" color="btn-info" />
      <Button valueButton="Login" color="btn-ok" />
      <Card data={animal} />

      <div>
        <h2>Hola {name}  y tienes {age}</h2>
      </div>
      {sayHi()}
      <img src={icono} alt="imagen de perfil" />
    </>
  )
}

export default App
