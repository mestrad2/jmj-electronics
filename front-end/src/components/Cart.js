import { useState, useEffect } from "react"
import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap"
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from "../context/Context"

function Cart() {

    const { state: { cart }, dispatch } = CartState()

    const [total, setTotal] = useState()

    //MDN Web Docs Array.prototype.reduce()
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.cost) * curr.qty, 0))
    }, [cart])

    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item key={prod.prod_id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={prod.image} alt={prod.description} fluid rounded></Image>
                                    </Col>
                                    <Col md={2}>
                                        <span>{prod.description}</span>
                                    </Col>
                                    <Col md={2}>
                                        $ {prod.cost}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            defaultValue={prod.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "changeCartQuantity",
                                                    payload: {
                                                        id: prod.prod_d,
                                                        qty: e.target.value,
                                                    }
                                                })}
                                        >
                                            {[...Array(prod.in_stock).keys()].map((x) => (
                                                <option key={x + 1}> {x + 1} </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                dispatch({
                                                    type: "removeFromCart",
                                                    payload: prod,
                                                })}
                                        >
                                            <AiFillDelete fontSize="20px" />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
                <Button type="button" disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart