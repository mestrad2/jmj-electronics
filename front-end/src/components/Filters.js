import { Button, Form } from "react-bootstrap"
import { CartState } from "../context/Context"

function Filters() {

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Appliances"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Computers"
                    name="group1"
                    type="checkbox"
                    id={`inline-5`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Phones"
                    name="group1"
                    type="checkbox"
                    id={`inline-6`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="TVs"
                    name="group1"
                    type="checkbox"
                    id={`inline-7`}
                />
            </span>
            <Button
                variant="light"
            >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters