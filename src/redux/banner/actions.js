import {
    BANNER_LIST_REQUEST_INIT,
    BANNER_LIST_REQUEST_FAILURE,
    BANNER_LIST_REQUEST_SUCCESS
} from "./actionTypes";

import {getBanners} from "./api";
  
export const getBannerData = () => {
    return (dispatch) => {
        dispatch({
            type: BANNER_LIST_REQUEST_INIT,
        });
        getBanners()
            .then((data) => {
                dispatch({
                    type: BANNER_LIST_REQUEST_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: BANNER_LIST_REQUEST_FAILURE,
                    payload: error,
                });
            });
    };
};
  