//Reference for useReducer https://reactjs.org/docs/hooks-reference.html#usereducer

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "removeFromCart":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "changeCartQuantity":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
};


export const productReducer = (state, action) => {
    switch (action.type) {
        case "priceSort":
            return { ...state, sort: action.payload }
        case "stockSort":
            return { ...state, byStock: !state.byStock }
        case "typeSort":
            return { ...state, typeSort: action.payload }
        case "search":
            return { ...state, searchQuery: action.payload }
        case "clear":
            return { byStock: false, byProductType: false, searchQuery: "" }
        default:
            return state
    }
}