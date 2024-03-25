import { useContext } from "react";
import { useForm } from "react-hook-form"
import { LibroContext } from "./Context/libroContext";


function Form() {

    const contexto = useContext(LibroContext)
    const { handleSubmit, register } = useForm();
    const onSubmit = (libro) => {
        console.log(libro)
        contexto.agregaLibro(libro)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                    Titulo
                    <input type="text" name="" id="" {...register("titulo")} />
                </label>

                <label htmlFor="">
                    Sinopsis
                    <input type="text" name="" id=""  {...register("sinopsis")} />
                </label>
                <label htmlFor="">
                    Url de la img
                    <input type="text" name="" id=""  {...register("img")} />
                </label>
                <button > Enviar </button>
            </form>
        </div>
    )
}

export default Form