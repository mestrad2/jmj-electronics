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
        case 'startCart': 
            return {
                ...action.payload,
                initialized: true
            }
        default:
            return state;
    }
};


export const productReducer = (state, action) => {
    switch (action.type) {
        case "costSort":
            return { ...state, sort: action.payload }
        case "stockSort":
            return { ...state, byStock: !state.byStock }
        case "typeSort":
            return { ...state, typeSort: action.payload }
        case "deliverySort":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "search":
            return { ...state, searchQuery: action.payload }
        case "clear":
            return { byStock: false, byProductType: false, searchQuery: "" }
        default:
            return state
    }
}