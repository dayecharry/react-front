import { useState } from "react"


function useLocalStorage(key) {

    const dataLocal = localStorage.getItem(key)
    const [value, setValue] = useState(dataLocal)

    const addDataLocal = (newValue) => {
        localStorage.setItem(key, newValue)
        setValue(newValue)
    }

    const deleteDataLocal = () => {
        localStorage.removeItem(key);
        setValue(null)
    }

    return [addDataLocal, deleteDataLocal, value]
}

export default useLocalStorage;