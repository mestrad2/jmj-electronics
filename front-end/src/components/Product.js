import { Button, Card } from "react-bootstrap"

function Product({prod}) {
    return <div className="products">
        <Card>
            <Card.Img variant='top' src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>$ {prod.price} </span>
                    <span>Description: {prod.description} </span>
                    <span>Type: {prod.productType}</span>
                </Card.Subtitle>
                <Button variant='danger'>Remove from Cart</Button>
                <Button disabled={!prod.inStock}>
                    {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
            </Card.Body>
        </Card>
    </div>
}

export default Product