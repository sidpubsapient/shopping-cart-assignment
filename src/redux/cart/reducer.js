import {
    TOGGLE_CART_DIALOG,
    ADD_TO_CART_INIT,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_SUCCESS,
    DEC_QTY,
    INC_QTY,
    REMOVE_FROM_CART
} from "./actionTypes";

const initialState = {
    isLoading: false,
    isErrored: false,
    errorMsg: "",
    cartItems: [],
    cartItemsCount: 0,
    cartTotalPrice: 0,
    isCartOpen: false,
};

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_TO_CART_INIT :
        return {...state, 
            isErrored: false,
            isLoading: true,
        };
    case ADD_TO_CART_SUCCESS : {
        let cartItems;
        const existingProduct = state.cartItems.find(
            (product) => product.id === action.payload.id
        );
        if (existingProduct) {
            cartItems = state.cartItems.map((product) =>
                product.id === action.payload.id
                    ? {
                        ...action.payload,
                        quantity: product.quantity + 1,
                        totalPrice: product.totalPrice + action.payload.price,
                    }
                    : product
            );
        } else {
            cartItems = [
                ...state.cartItems,
                { ...action.payload, quantity: 1, totalPrice: action.payload.price },
            ];
        }
        return {
            ...state,
            cartItems,
            cartItemsCount: state.cartItemsCount + 1,
            cartTotalPrice: state.cartTotalPrice + action.payload.price,
        };
    }
    case ADD_TO_CART_FAILURE :
        return {...state,
            errorMsg: action.payload,
            isErrored: true,
            isLoading: false,
            
        }; 
    case TOGGLE_CART_DIALOG: {
        return {
            ...state,
            isCartOpen: !state.isCartOpen,
        };
    }
    case INC_QTY: {
        let cartItems = state.cartItems.map((product) =>
            product.id === action.payload.id
                ? {
                    ...action.payload,
                    quantity: product.quantity + 1,
                    totalPrice: product.totalPrice + action.payload.price,
                }
                : product
        );
        return {
            ...state,
            cartItems,
            cartItemsCount: state.cartItemsCount + 1,
            cartTotalPrice: state.cartTotalPrice + action.payload.price,
        };
    } 
    case DEC_QTY: {
        let cartItems = state.cartItems.map((product) =>
            product.id === action.payload.id
                ? {
                    ...action.payload,
                    quantity: product.quantity - 1,
                    totalPrice: product.totalPrice - action.payload.price,
                }
                : product
        );
        return {
            ...state,
            cartItems,
            cartItemsCount: state.cartItemsCount - 1,
            cartTotalPrice: state.cartTotalPrice - action.payload.price,
        };
    }
    case REMOVE_FROM_CART: {
        return {
            ...state,
            cartItems: state.cartItems.filter(
                (product) => product.id !== action.payload.id
            ),
            cartItemsCount: state.cartItemsCount - 1,
            cartTotalPrice: state.cartTotalPrice - action.payload.price,
        };
    }
    default:
        return state;
    }
};

export default cartsReducer;
