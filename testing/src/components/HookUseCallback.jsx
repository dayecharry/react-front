import { useCallback, useState } from "react"
import HijoComponent from "./HijoComponent"


function HookUseCallback() {
    const [name, setName] = useState("")
    /*
        const changeName = (newName) => {
            setName("anacleta")
        }*/

    const memorizarFuncion = useCallback((newName) => {
        setName(newName)
    }, [])


    return (
        <div>HookUseCallback

            <HijoComponent change={memorizarFuncion} />

            <h3>
                {name ? `Bienvenida ${name}` : null}
            </h3>
        </div>
    )
}

export default HookUseCallback