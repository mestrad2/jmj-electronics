import React from 'react'
import { Badge, Container, Dropdown, Navbar, FormControl, Nav } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <a href="/">JMJ Electronics</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignright="true">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>0</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10}}> Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent