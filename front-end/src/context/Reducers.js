//Reference for useReducer https://reactjs.org/docs/hooks-reference.html#usereducer

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
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
        case "applianceSort":
            return { ...state, byAppliance: action.payload }
        case "computerSort":
            return { ...state, byComputer: action.payload }
        case "phoneSort":
            return { ...state, byPhone: action.payload }
        case "tvSort":
            return { ...state, byTV: action.payload }
        case "search":
            return { ...state, searchQuery: action.payload }
        case "clear":
            return { byStock: false, byAppliance: false, byComputer: false, byPhone: false, byTV: false, searchQuery: "" }
        default:
            return state
    }
}