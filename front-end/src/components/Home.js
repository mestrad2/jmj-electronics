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
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            ))
        }

        if (!byStock) {
            tempProducts = tempProducts.filter((prod) => prod.inStock)
        }

        if (typeSort === "appliance") {
            tempProducts = tempProducts.filter((prod) => prod.productType.includes("appliance"))
        }

        if (typeSort === "computer") {
            tempProducts = tempProducts.filter((prod) => prod.productType.includes("computer"))
        }

        if (typeSort === "phone") {
            tempProducts = tempProducts.filter((prod) => prod.productType.includes("phone"))
        }

        if (typeSort === "tv") {
            tempProducts = tempProducts.filter((prod) => prod.productType.includes("tv"))
        }

        if (byFastDelivery) {
            tempProducts = tempProducts.filter((prod) => prod.fastDelivery)
          }

        if (searchQuery) {
            tempProducts = tempProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
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