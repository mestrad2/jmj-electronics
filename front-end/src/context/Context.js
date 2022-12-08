import { createContext } from "react"

const Cart = createContext()

function Context({ children }) {

    //fetch products from database
    const products = (e) => {
        e.preventDefault()
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

    console.log(products)
    return(
        <Cart.Provider value="">
            {children}
        </Cart.Provider>
    )
}

export default Context