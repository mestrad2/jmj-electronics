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
            image: "https://place-puppy.com/300x300",
            productType: "appliance",
            inStock: 3,
            description:"object number one"
        },
        {
            name: "object 2",
            id: 2,
            price: 7,
            image: "https://place-puppy.com/300x300",
            productType: "computer",
            inStock: 5,
            description:"object number two"
        },
        {
            name: "object 3",
            id: 3,
            price: 9,
            image: "https://place-puppy.com/300x300",
            productType: "phone",
            inStock: 1,
            description:"object number three"
        },
        {
            name: "object 4",
            id: 4,
            price: 12,
            image: "https://place-puppy.com/300x300",
            productType: "tv",
            inStock: 0,
            description:"object number four"
        }
    ]


    //Reducers
    const [state, dispatch] = useReducer(cartReducer, {
        products: tempObjectArray,
        cart: [],
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byProductType: false,
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