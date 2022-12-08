import React from 'react'
import { Badge, Container, Dropdown, Navbar, FormControl, Nav, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

function NavbarComponent() {

    const { state: { cart }, dispatch, productDispatch } = CartState()
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">JMJ Electronics</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                        onChange={(e) => {
                            productDispatch({
                                type: "search",
                                payload: e.target.value.toLowerCase()
                            })
                        }}
                    />
                </Navbar.Text>
                <Navbar.Brand>
                    <Link to="/inventory">Don't See a Product? Add One Here</Link>
                </Navbar.Brand>
                <Nav>
                    <Dropdown alignright="true">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <div>
                                    {
                                        cart.map((prod) => (
                                            <span className="cartItem" key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>$ {prod.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "removeFromCart",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>Go To Cart</Button>
                                    </Link>
                                </div>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent