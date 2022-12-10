import { useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import { CartState } from "../context/Context"

function Inventory() {
    const {
        addItemDispatch
    } = CartState()


    const initialItem = {
        description: "",
        cost: "",
        image: "",
        spec: "",
        stock: "",
        fast_deliver: false,
        product_type: "",
    }

    const [item, setItem] = useState(initialItem)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log("Value", value)
        setItem({
            ...item,
            [name]: value
        })
    }

    const handleSubmit = () => {

        const newItem = item
        console.log("NewItem" , item.description)
        try {
            fetch(`http://localhost:3003/products`, {
                method: "POST",
                body: JSON.stringify(newItem),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => (response.json()))
                .then((response) => {
                    if (response.status === 200) {
                        addItemDispatch({
                            type: "addItem",
                            payload: newItem
                        })
                    }
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="inventoryContainer">
            <Form style={{ padding: 30 }}>
                <h1 className="inventoryHeading">Add New Product</h1>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Add a Product</Form.Label>
                    <Col>
                        <Form.Control
                            value={item.description}
                            onChange={handleInputChange}
                            name='description'
                            type="text"
                            placeholder="Enter Product Name"
                            style={{ width: 750 }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Add a Price</Form.Label>
                    <Col>
                        <Form.Control
                            value={item.cost}
                            onChange={handleInputChange}
                            name='cost'
                            type="text"
                            placeholder="Enter Price"
                            style={{ width: 750 }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Add Quantity in Stock</Form.Label>
                    <Col>
                        <Form.Control
                            value={item.stock}
                            onChange={handleInputChange}
                            name='in_stock'
                            type="text"
                            placeholder="Enter Quantity in Stock"
                            style={{ width: 750 }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Add a Description</Form.Label>
                    <Col>
                        <Form.Control
                            value={item.spec}
                            onChange={handleInputChange}
                            name='spec'
                            type="text"
                            placeholder="Enter Description"
                            style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Add a Image</Form.Label>
                    <Col>
                        <Form.Control
                            value={item.image}
                            onChange={handleInputChange}
                            name='image'
                            type="text"
                            placeholder="Enter Image URL"
                            style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Product Type
                        </Form.Label>
                        <Col sm={10} className="radios">
                            <Form.Check
                                value="Appliance"
                                onChange={handleInputChange}
                                name="product_type"
                                type="radio"
                                label="Appliance"
                            />
                            <Form.Check
                                value="Computer"
                                onChange={handleInputChange}
                                name="product_type"
                                type="radio"
                                label="Computer"
                            />
                            <Form.Check
                                value="Phone"
                                onChange={handleInputChange}
                                name="product_type"
                                type="radio"
                                label="Phone"
                            />
                            <Form.Check
                                value="TV"
                                onChange={handleInputChange}
                                name="product_type"
                                type="radio"
                                label="TV"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Delivery Type
                        </Form.Label>
                        <Col sm={10} className="radios">
                            <Form.Check
                                value={true}
                                onChange={handleInputChange}
                                name="fast_deliver"
                                type="radio"
                                label="Fast Delivery"

                            />
                            <Form.Check
                                value={false}
                                onChange={handleInputChange}
                                name="fast_deliver"
                                type="radio"
                                label="7 Day Deliver"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Button onClick={handleSubmit()} type="submit" style={{ width: 400 }}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Inventory