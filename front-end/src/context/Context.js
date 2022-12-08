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
            id: 1,
            name: "object 1",
            price: 5,
            image: "https://place-puppy.com/300x300",
            description:"object number one",
            productType: "appliance",
            inStock: 3,
            fastDelivery: true,
        },
        {
            id: 2,
            name: "object 2",
            price: 7,
            image: "https://place-puppy.com/300x300",
            description:"object number two",
            productType: "computer",
            inStock: 5,
            fastDelivery: true,
        },
        {
            id: 3,
            name: "object 3",
            price: 9,
            image: "https://place-puppy.com/300x300",
            description:"object number three",
            productType: "phone",
            inStock: 3,
            fastDelivery: false,
        },
        {
            id: 4,
            name: "object 4",
            price: 12,
            image: "https://place-puppy.com/300x300",
            description:"object number four",
            productType: "tv",
            inStock: 0,
            fastDelivery: false,
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
        byFastDelivery: false,
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