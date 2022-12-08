import { createContext, useEffect, useState } from "react"

const Cart = createContext()

function Context({ children }) {

    let [product, setProduct] = useState('')
    let [message, setMessage] = useState('')

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
    })
    //fetch products from database
    /*const products = (e) => {
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
    }*/

    console.log(product)
    return(
        <Cart.Provider value="">
            {children}
        </Cart.Provider>
    )
}

export default Context