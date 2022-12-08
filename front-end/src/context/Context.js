import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext()

function Context({ children }) {

    //let [product, setProduct] = useState([])
    //let [message, setMessage] = useState('')

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

    const tempObjectArray = [
        {
            name: "object 1",
            id: 1,
            price: 5,
            image: "image",
            productType: "appliance",
            inStock: 3,
        },
        {
            name: "object 2",
            id: 2,
            price: 7,
            image: "image",
            productType: "computer",
            inStock: 5,
        },
        {
            name: "object 3",
            id: 3,
            price: 9,
            image: "image",
            productType: "phone",
            inStock: 1,
        },
        {
            name: "object 4",
            id: 4,
            price: 12,
            image: "image",
            productType: "tv",
            inStock: 2,
        }
    ]

    //Reducers
    const [state, dispatch] = useReducer(cartReducer, {
        products: tempObjectArray,
        cart: [],
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byProductType: "",
        byAppliance: false, 
        byComputer: false, 
        byPhone: false, 
        byTV: false, 
        searchQuery: "",
    })

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context

//Allows use of the context created when called in other components
export const CartState = () => {
    return useContext(Cart)
}