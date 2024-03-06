import { useState } from "react"

const initial_state = {
  name: "",
  lastname: "",
  password: "",
  email: "",
  rec: "",
  pet: ""
}
function App() {

  const [profile, setProfile] = useState(initial_state);
  const [darkMode, setDarkMode] = useState(false)

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(id)
    /*
    if (id === "name") {
      setProfile({ ...profile, name: value })
    } else if (id === "lastname") {
      setProfile({ ...profile, lastname: value })
    } else if (id === "email") {
      setProfile({ ...profile, email: value })
    } else if (id === "password") {
      setProfile({ ...profile, password: value })
    } else if (id === "rec") {
      setProfile({ ...profile, rec: value })
    }
*/
    setProfile({ ...profile, [id]: value })
    if (id === "rec") {
      setProfile({ ...profile, rec: e.target.checked })
    }
  }
  const handleReset = () => {
    setProfile(initial_state)
  }
  const handleMode = (ev) => {
    setDarkMode(ev.target.checked)
  }

  return (
    <>
      <div className={darkMode ? "dark_mode" : ""}>
        <input type="checkbox" onChange={handleMode} checked={darkMode} /> Modo oscuro

        <h1>Formularios </h1>
        <form action="">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="" id="name" onChange={handleInput} value={profile.name} />
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="" id="lastname" onChange={handleInput} value={profile.lastname} />
          </div>
          <div>
            <label htmlFor="email">mail</label>
            <input type="text" name="" id="email" onChange={handleInput} value={profile.email} />
          </div>
          <div>
            <label htmlFor="pass">Contraseña</label>
            <input type="text" name="" id="password" onChange={handleInput} value={profile.password} />
          </div>
          <div>
            <input type="checkbox" name="" id="rec" onChange={handleInput} value={true} checked={profile.rec} />
            <label htmlFor="rec">Recuerdame</label>
          </div>

          <div>
            <label htmlFor="">¿Tiene mascota?</label>
            <input type="radio" name="pet" id="pet" onChange={handleInput} value="si" checked={profile.pet === "si"} /> Si
            <input type="radio" name="pet" id="pet" onChange={handleInput} value="no" checked={profile.pet === "no"} /> No
          </div>
          <input type="reset" value="borrar" onClick={handleReset} />
        </form>
      </div>

    </>
  )
}

export default App
