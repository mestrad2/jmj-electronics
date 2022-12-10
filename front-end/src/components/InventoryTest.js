import {useState} from 'react';
import { CartState } from '../context/Context';

const InventoryTest = () => {
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


  const handleChange = event => {
    const { name, value } = event.target
    console.log("Name", name)
    console.log("Value", value)
    setItem({
        ...item,
        [name]: value
    })
  };

  const handleClick = event => {
    event.preventDefault();

    // 👇 value of input field
    console.log('old value: ', item);

    // 👇 set value of input field
    setItem('New value');
    try {
        fetch(`http://localhost:3003/products`, {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => (response.json()))
            .then((response) => {
                if (response.status === 200) {
                    addItemDispatch({
                        type: "addItem",
                        payload: item
                    })
                }
            })
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div>
      <input
        type="text"
        id="description"
        name="description"
        onChange={handleChange}
        value={item.description}
      />
        <input
        type="text"
        id="cost"
        name="cost"
        onChange={handleChange}
        value={item.cost}
      />

      <h2>Message: {item.description}</h2>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default InventoryTest;
