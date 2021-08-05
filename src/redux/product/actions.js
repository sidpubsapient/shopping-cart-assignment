import {
    PRODUCT_LIST_REQUEST_INIT,
    PRODUCT_LIST_REQUEST_FAILURE,
    PRODUCT_LIST_REQUEST_SUCCESS
} from "./actionTypes";

import {getProducts} from "./api";
  
export const getProductData = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_LIST_REQUEST_INIT,
        });
        getProducts()
            .then((data) => {
                dispatch({
                    type: PRODUCT_LIST_REQUEST_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: PRODUCT_LIST_REQUEST_FAILURE,
                    payload: error,
                });
            });
    };
};
  