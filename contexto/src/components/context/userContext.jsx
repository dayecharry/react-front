import { createContext, useState } from "react";

export const UserContext = createContext();


// Hook personalizado para darle valo y modificar al contexto
export const useInitialUserContext = () => {

    const [state, setState] = useState({
        users: ["pepe", "ana", "maricarmen", "juan"],
        student: ["jeff", "nerea", "vahan", "maria", "alejandro", "jhon"]
    })


    const addUser = (newUser) => {
        setState(
            { ...state, users: [...state.users, newUser] }
            // hago una copia de state,  y selecciono la propiedad user,  al ser un array debo hacer una copia de users para añadir al nuevo elemento, con el spread operator
        )
    }

    const addStudent = (newStudent) => {
        setState(
            { ...state, student: [...state.student, newStudent] }
        )
    }


    return { ...state, addUser, addStudent }
}