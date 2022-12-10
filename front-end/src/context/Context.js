import { createContext, useContext, useReducer, useState, useEffect } from "react"
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext()

const initialState = {
    initialized: false,
    products: [],
    cart: [],
}

function Context({ children }) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3003/products`)
            .then(response => response.json())
            .then(resData => {
                if (resData.length > 0) {
                    console.log("This is resData ", resData)
                    setData(resData)
                    dispatch({
                        type: "startCart",
                        payload: {
                            ...initialState,
                            products: resData
                        }
                    })
                    return setData(resData)
                } else {
                    return console.log('Not Found')
                }
            })
    }, [])

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byProductType: false,
        byFastDelivery: false,
        searchQuery: "",
    })

    //fetch products from database


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

