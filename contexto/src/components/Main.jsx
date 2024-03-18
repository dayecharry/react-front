import { useContext } from "react"
import { ProductContext } from "./context/productContext"



function Main() {
    const product = useContext(ProductContext)

    return (
        <div>
            Main
            {product.map((item, i) => <p key={i}>{item.name}</p>)}

        </div>
    )
}

export default Main