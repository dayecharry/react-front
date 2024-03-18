import axios from "axios"
import { useState, useEffect } from "react"

function useFetch(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url).then(
            (info) => setData(info.data),
            (error) => setError(error))
    }, [url])
    //se ejecuta el useEffect cada vez que la url cambie de valor

    return { data, error }
}

export default useFetch