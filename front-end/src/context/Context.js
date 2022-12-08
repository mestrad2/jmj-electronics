import { createContext, useEffect, useReducer, useState } from "react"
import { cartReducer } from "./Reducers";

const Cart = createContext()

function Context({ children }) {

    let [product, setProduct] = useState([])
    let [message, setMessage] = useState('')

    //fetch products from database

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3003/products')
            .then(response => response.json())
            .then(resData => {
                if (resData.results.length > 0) {
                    return resData.results
                } else {
                    return console.log('Not Found')
                }
            })
            .catch(err => console.log('No Products Available!'))
        }
        fetchData()
    }, [])
    
    console.log(product)

    //Reducers
    const [state, dispatch] = useReducer(cartReducer, {
        products: product,
        cart: [],
    })

    return(
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context