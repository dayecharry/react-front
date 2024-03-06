import { useState } from "react";

import Card from "./Card";
import data from "../data/data.json";

function App() {

  const [title, setTitle] = useState("")
  const [listBooks, setListBooks] = useState(data)

  const handleInput = (ev) => {
    setTitle(ev.target.value)
  }
  const filterData = listBooks.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase()) ||
    book.author.toLowerCase().includes(title.toLowerCase()) ||
    book.year.includes(title)
  );
  const handleReset = (ev) => {
    ev.preventDefault();
    setTitle("")
  }

  return (
    <div>
      <h1>Clase 2 </h1>
      <input type="text" onChange={handleInput} value={title} />
      <button onClick={handleReset}> reset </button>
      <p>La pelicula  filtrada es {title}</p>
      <main>
        {filterData.map(
          (book, i) => <Card book={book} key={i} />
        )
        }

      </main>

    </div>
  )
}

export default App
