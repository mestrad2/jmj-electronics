import { Button, Form } from "react-bootstrap"
import { CartState } from "../context/Context"

function Filters() {

    const { productState : {sort, typeSort, byStock, byFastDelivery }, productDispatch} = CartState()

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
                    onChange={() =>
                        productDispatch({
                            type: "priceSort",
                            payload: "lowToHigh"
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                        productDispatch({
                            type: "priceSort",
                            payload: "highToLow"
                        })
                    }
                    checked={sort === "highToLow" ? true: false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: "stockSort"
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() =>
                        productDispatch({
                            type: "deliverySort",
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Appliances"
                    name="group2"
                    type="radio"
                    id={`inline-4`}
                    onChange={() =>
                        productDispatch({
                            type: "typeSort",
                            payload: "appliance"
                        })
                    }
                    checked={typeSort === "appliance" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Computers"
                    name="group2"
                    type="radio"
                    id={`inline-5`}
                    onChange={() =>
                        productDispatch({
                            type: "typeSort",
                            payload: "computer"
                        })
                    }
                    checked={typeSort === "computer" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Phones"
                    name="group2"
                    type="radio"
                    id={`inline-6`}
                    onChange={() =>
                        productDispatch({
                            type: "typeSort",
                            payload: "phone"
                        })
                    }
                    checked={typeSort === "phone" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="TVs"
                    name="group2"
                    type="radio"
                    id={`inline-7`}
                    onChange={() =>
                        productDispatch({
                            type: "typeSort",
                            payload: "tv"
                        })
                    }
                    checked={typeSort === "tv" ? true : false}
                />
            </span>
            <Button
                variant="light"
                onClick={() =>
                    productDispatch({
                        type: "clear"
                    })
                }
            >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters