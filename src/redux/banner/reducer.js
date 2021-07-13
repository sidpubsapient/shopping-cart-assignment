import {
    BANNER_LIST_REQUEST_INIT,
    BANNER_LIST_REQUEST_FAILURE,
    BANNER_LIST_REQUEST_SUCCESS
} from "./actionTypes";

const initialState = {
    isLoading: false,
    banners: [],
    isErrored: false,
    errorMsg: ""
};

const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
    case BANNER_LIST_REQUEST_INIT :
        return {...state, 
            isErrored: false,
            isLoading: true,
        };
    case BANNER_LIST_REQUEST_SUCCESS :
        return {...state, 
            banners: action.payload,
            isErrored: false,
            isLoading: false,
        };
    case BANNER_LIST_REQUEST_FAILURE :
        return {...state,
            errorMsg: action.payload,
            isErrored: true,
            isLoading: false,
        
        };    
    default:
        return state;
    }
};

export default bannersReducer;
