
import Form from "./Form"
import ListBooks from "./ListBooks"
import { LibroContext, useLibroContext } from './Context/libroContext.js';
import { Link, Route, Routes } from "react-router-dom";
import ListaFavoritos from "./ListaFavoritos.jsx";



function App() {

  const librocon = useLibroContext();

  return (
    <>
      <header>

        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/misfavoritos">
          <i className="fa-solid fa-star"></i> Mis favoritos
        </Link>

      </header>
      <h1>Libreria </h1>
      <LibroContext.Provider value={librocon} >
        <div>
          <Routes>
            <Route path="/" element={<> <Form /> <ListBooks /></>} />
            <Route path="/misfavoritos" element={<ListaFavoritos />} />
          </Routes>


        </div>
      </LibroContext.Provider >
    </>
  )
}

export default App
