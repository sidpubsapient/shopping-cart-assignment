import {
    PRODUCT_LIST_REQUEST_INIT,
    PRODUCT_LIST_REQUEST_FAILURE,
    PRODUCT_LIST_REQUEST_SUCCESS
} from "./actionTypes";

const initialState = {
    isLoading: false,
    products: [],
    isErrored: false,
    errorMsg: ""
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
    case PRODUCT_LIST_REQUEST_INIT :
        return {...state, 
            isErrored: false,
            isLoading: true,
        };
    case PRODUCT_LIST_REQUEST_SUCCESS :
        return {...state, 
            products: action.payload,
            isErrored: false,
            isLoading: false,
        };
    case PRODUCT_LIST_REQUEST_FAILURE :
        return {...state,
            errorMsg: action.payload,
            isErrored: true,
            isLoading: false,
        
        };    
    default:
        return state;
    }
};

export default productsReducer;
