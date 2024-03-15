import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Login from "./login/Login"
import Nav from "./nav/Nav"
import { useEffect, useState } from "react"
import Profile from "./profile/Profile"
import AuthRoute from "./AuthRoute/AuthRoute"
function App() {

  // recojo los datos del LocalStorage y lo guardo en la variable de usuario, para mantener la sesion abiertA EN  casi que hayan datos guardados
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")));

  const changeUser = (value) => {
    setUser(value)
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user))
  }, [user]) // se ejecuta cada vez que user cambia su valor

  useEffect(() => {


  }, []) // [] -->  se ejecuta la funcion de useEffect 1 sola vez, cuando carga la pagina

  return (
    <>
      { /* 
    login--> autenticación 
    ir a seccion privada por ejemplo el perfil de usuario --> tengo que estar autorizado
      */}


      <div>
        <h1>Template react,</h1>
        <h2>{user ? `Bienvenido ${user.name}` : null}</h2>
        <Nav user={user} changeUser={changeUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login changeUser={changeUser} />} />

          {/* Ruta privada, se necesita estar autenticado para ingresar al perfil del usuario */}
          <Route path="/profile" element={<AuthRoute user={user} component={
            <Profile user={user} />} />} />


        </Routes>


      </div>

    </>
  )
}

export default App
