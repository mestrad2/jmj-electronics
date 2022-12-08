import { Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import { Link } from "react-router-dom"


function Product({ prod }) {

    const { state: { cart }, dispatch } = CartState()
   

    return <div className="products">
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>$ {Number(prod.price)} </span>
                    <br />
                    <span>Description: {prod.description} </span>
                    <br />
                    <span>Type: {prod.productType}</span>
                </Card.Subtitle>
                {
                    cart.some((p) => p.id === prod.id) ? (
                        <Button onClick={() => {
                            dispatch({
                                type: 'removeFromCart',
                                payload: prod,
                            })
                        }} variant='danger'>Remove from Cart</Button>
                    ) : (
                        <Button onClick={() => {
                            dispatch({
                                type: 'addToCart',
                                payload: prod,
                            })
                        }} disabled={!prod.inStock}>
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )
                }
                <Button>
                    <Link to={`/edit/${prod.id}`} style={{ color: "white" }}>Update Item</Link>
                </Button>
            </Card.Body>
        </Card>
    </div>
}

export default Product
