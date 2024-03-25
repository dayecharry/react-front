import { createContext } from 'react';
import { useState } from 'react';

export const LibroContext = createContext();

export const useLibroContext = () => {
  // libros --> la variable de estado, setlibro es una funcion para modificar la variable de estado
  const [libros, setLibros] = useState([
    {
      id: Date.now(),
      titulo: '100 años de soledad',
      sinopsis: 'lorem bla  bla',
      img: 'https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF894,1000_QL80_.jpg',
    },
  ]);
  const [librosFav, setLibrosFav] = useState([]);

  const agregaLibro = (nuevoLibro) => {
    nuevoLibro.id = Date.now();
    setLibros([...libros, nuevoLibro]);
  };
  const agregaFav = (id) => {
    // buscar si ya es un favorito
    const libroClicado = librosFav.find((item) => item.id === parseInt(id));

    if (!libroClicado) {
      //buscar toda la info de ese libro clicado para guardarla  en fav
      const dataLibroClicado = libros.find((item) => item.id === parseInt(id));

      setLibrosFav([...librosFav, dataLibroClicado]);
    }
  };

  return { libros, agregaLibro, librosFav, agregaFav };
};
