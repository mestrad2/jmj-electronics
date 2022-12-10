import { Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import { Link } from "react-router-dom"


function Product({ prod }) {

    const { state: { cart }, dispatch } = CartState()
    console.log("This is prod, ", prod)
    return <div className="products">
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.description} />
            <Card.Body>
                <Card.Title>{prod.description}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>$ {Number(prod.cost)} </span>
                    <br />
                    <span>Description: {prod.spec} </span>
                    <br />
                    {prod.fast_deliver ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>7 Day Delivery</div>
                    )}
                </Card.Subtitle>
                {
                    cart.some((p) => p.prod_id === prod.prod_id) ? (
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
                        }} disabled={!prod.in_stock}>
                            {!prod.in_stock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )
                }
                <Button>
                    <Link to={`/edit/${prod.prod_id}`} style={{ color: "white" }}>Update Item</Link>
                </Button>
            </Card.Body>
        </Card>
    </div>
}

export default Product
