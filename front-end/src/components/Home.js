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


    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    <Product prod={products} key={products.id} />
                }
            </div>
        </div>
    )
}

export default Home