import {
    CATEGORY_LIST_REQUEST_INIT,
    CATEGORY_LIST_REQUEST_FAILURE,
    CATEGORY_LIST_REQUEST_SUCCESS
} from "./actionTypes";

import {getCategories} from "./api";
  
export const getCategoryData = () => {
    return (dispatch) => {
        dispatch({
            type: CATEGORY_LIST_REQUEST_INIT,
        });
        getCategories()
            .then((data) => {
                dispatch({
                    type: CATEGORY_LIST_REQUEST_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: CATEGORY_LIST_REQUEST_FAILURE,
                    payload: error,
                });
            });
    };
};
  