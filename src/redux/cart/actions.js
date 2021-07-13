import {
    TOGGLE_CART_DIALOG,
    ADD_TO_CART_INIT,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_SUCCESS,
    DEC_QTY,
    INC_QTY,
    REMOVE_FROM_CART
} from "./actionTypes";

import { addItemToCart } from "./api"

export const toggleCart = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_CART_DIALOG,
        });
    };
};

export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART_INIT,
        });
        addItemToCart()
            .then(() => {
                dispatch({
                    type: ADD_TO_CART_SUCCESS,
                    payload: item,
                });
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TO_CART_FAILURE,
                    payload: error,
                });
            });
    };
} 

export const removeFromCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: item
        });
    };
}

export const incrementQty = (item) => {
    return (dispatch) => {
        dispatch({
            type: INC_QTY,
            payload: item
        });
    };
}

export const decrementQty = (item) => {
    return (dispatch) => {
        dispatch({
            type: DEC_QTY,
            payload: item
        });
    };
}
  