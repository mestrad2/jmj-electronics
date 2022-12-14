import { Form, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { CartState } from "../context/Context"

function Edit() {

    const initialItemState = {
        description: "",
        cost: "",
        image: "",
        spec: "",
        stock: 0,
        fast_deliver: false,
        product_type: "",
    }

    return (
        <div className="inventoryContainer">
            <Form style={{ padding: 30 }}>
                <h1 className="inventoryHeading">Edit Product</h1>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Edit a Product</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Enter a Name" style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Edit a Price</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Price" style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Edit Quantity in Stock</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Quantity in Stock" style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Edit a Description</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Description" style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Edit a Image</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Image URL" style={{ width: 750 }} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Product Type
                        </Form.Label>
                        <Col sm={10} className="radios">
                            <Form.Check
                                type="radio"
                                label="Appliance"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Computer"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Phone"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                label="TV"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Button type="submit" style={{ width: 400 }}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Edit