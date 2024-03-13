import { useParams } from "react-router-dom";
import language from "../data/lg.json"

function DetailLanguage() {

    //    console.log(params.id)
    const { id } = useParams()

    //const findLang = language.find((item) => item.id.toString()  === id )
    const findLang = language.find((item) => item.id === parseInt(id))
    return (
        <div>
            <h3>{findLang.name}</h3>
            <h4>{findLang.description}</h4>
        </div>
    )
}

export default DetailLanguage