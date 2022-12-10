import { useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import { CartState } from "../context/Context"

function Inventory() {
    const {
        addItemDispatch
    } = CartState()

    const [newDescription, setNewDescription] = useState("")
    const [newCost, setNewCost] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newSpec, setNewSpec] = useState("")
    const [newStock, setNewStock] = useState(0)
    const [newDeliver, setNewDeliver] = useState(false)
    const [newProductType, setNewProductType] = useState("")


    const handleSubmit = () => {

        const newItem = {
            description: newDescription,
            cost: newCost,
            image: newImage,
            spec: newSpec,
            in_stock: newStock,
            fast_deliver: newDeliver,
            product_type: newProductType
        }
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
                            onChange={(e) => {setNewDescription(e.target.value)}}
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
                            onChange={(e) => {setNewCost(e.target.value)}}
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
                            onChange={(e) => {setNewStock(e.target.value)}}
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
                            onChange={(e) => {setNewSpec(e.target.value)}}
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
                            onChange={(e) => {setNewImage(e.target.value)}}
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
                                onChange={(e) => {setNewProductType(e.target.value)}}
                                name="product_type"
                                type="radio"
                                label="Appliance"
                            />
                            <Form.Check
                                onChange={(e) => {setNewProductType(e.target.value)}}
                                name="product_type"
                                type="radio"
                                label="Computer"
                            />
                            <Form.Check
                                onChange={(e) => {setNewProductType(e.target.value)}}
                                name="product_type"
                                type="radio"
                                label="Phone"
                            />
                            <Form.Check
                                onChange={(e) => {setNewProductType(e.target.value)}}
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
                                onChange={(e) => {setNewDeliver(true)}}
                                name="fast_deliver"
                                type="radio"
                                label="Fast Delivery"

                            />
                            <Form.Check
                                onChange={(e) => {setNewDeliver(false)}}
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