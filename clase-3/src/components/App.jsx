import { useEffect, useState } from "react"
import Breed from "./breed/Breed";
import Form from "./form/Form";

function App() {
  const [name, setName] = useState(""); // hooks --> useState, useEffect, useContext, useRef, useCallback 
  const [urlImg, setUrlImg] = useState("");
  const [breed, setBreed] = useState("");
  const [urlImgBreed, setUrlImgBreed] = useState("");
  /*useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setUrlImg(data.message)
      })
  }, [])*/

  useEffect(() => {
    const getDataApi = async () => {
      const dataApi = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await dataApi.json();
      setUrlImg(data.message)
    }
    getDataApi();
  }, [])
  //[] --> ejecutar ese bloque una sola vez cuando carga el componente
  const handleBreed = (value) => {
    setBreed(value)
  }

  useEffect(() => {
    const getDataBreed = async () => {
      const dataJson = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const data = await dataJson.json();
      setUrlImgBreed(data.message)
    }
    getDataBreed();
  }, [breed])
  // [breed] --> ejeucta el useEffect cada vez que  breed cambie

  return (
    <>
      <div>
        <h1> useEffect</h1>
        <img src={urlImg} alt="" />
        <Form handleBreed={handleBreed} />
        <Breed breedUrl={urlImgBreed} />
      </div>

    </>
  )
}

export default App
