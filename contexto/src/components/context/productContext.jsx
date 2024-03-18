import { createContext, useState } from "react";


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    // estos datos suelen ser variables, fetch, form, localStorage, etc
    const [product, setProduct] = useState([
        { name: "coca cola", price: 2 }, { name: "cerveza", price: 3 }
    ])

    return (

        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}