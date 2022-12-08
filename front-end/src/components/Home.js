import "./styles.css"
import { CartState } from "../context/Context"
import Product from "./Product";
import Filters from "./Filters";

function Home() {

    //throws error currently until backend is fixed, set to dummy Array
    const { 
        state : { products },
        productState: { byStock, byAppliance, byComputer, byPhone, byTV, sort}
    } = CartState()

    const displayProducts = () => {
        let tempProducts = products

        return tempProducts
    }

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    displayProducts().map((prod) => {
                        return <Product prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Home