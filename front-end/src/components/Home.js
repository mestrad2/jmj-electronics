import "./styles.css"
import { CartState } from "../context/Context"
import Product from "./Product";

function Home() {

    //throws error currently until backend is fixed, set to dummy Array
    const { 
        state 
    } = CartState()

    console.log(state);

    const tempObject = {
        name: "object 1",
        id: 1,
        value: 5,
    }
    return (
        <div className="home">
            Filters will appear here
            <div className="productContainer">
                {
                    <Product prod={tempObject} key={tempObject.id} />
                }
            </div>
        </div>
    )
}

export default Home