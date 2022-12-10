import "./styles.css"
import { CartState } from "../context/Context"
import Product from "./Product";
import Filters from "./Filters";

function Home() {

    //throws error currently until backend is fixed, set to dummy Array
    const {
        state: { products },
        productState: { byStock, sort, typeSort, byFastDelivery, searchQuery }
    } = CartState()

    const filterProducts = () => {
        let tempProducts = products

        if (sort) {
            tempProducts = tempProducts.sort((a, b) => (
                sort === 'lowToHigh' ? a.cost - b.cost : b.cost - a.cost
            ))
        }

        if (!byStock) {
            tempProducts = tempProducts.filter((prod) => prod.in_stock)
        }

        if (typeSort === "appliance") {
            tempProducts = tempProducts.filter((prod) => prod.product_type.includes("appliance"))
        }

        if (typeSort === "computer") {
            tempProducts = tempProducts.filter((prod) => prod.product_type.includes("computer"))
        }

        if (typeSort === "phone") {
            tempProducts = tempProducts.filter((prod) => prod.product_type.includes("phone"))
        }

        if (typeSort === "tv") {
            tempProducts = tempProducts.filter((prod) => prod.product_type.includes("tv"))
        }

        if (byFastDelivery) {
            tempProducts = tempProducts.filter((prod) => prod.fast_deliver)
          }

        if (searchQuery) {
            tempProducts = tempProducts.filter((prod) => prod.description.toLowerCase().includes(searchQuery))
        }

        return tempProducts
    }

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    filterProducts().map((prod) => {
                        return <Product prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Home