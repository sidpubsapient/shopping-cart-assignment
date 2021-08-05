import {
    CATEGORY_LIST_REQUEST_INIT,
    CATEGORY_LIST_REQUEST_FAILURE,
    CATEGORY_LIST_REQUEST_SUCCESS
} from "./actionTypes";

const initialState = {
    isLoading: false,
    categories: [],
    isErrored: false,
    errorMsg: ""
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
    case CATEGORY_LIST_REQUEST_INIT :
        return {...state, 
            isErrored: false,
            isLoading: true,
        };
    case CATEGORY_LIST_REQUEST_SUCCESS :
        return {...state, 
            categories: action.payload,
            isErrored: false,
            isLoading: false,
        };
    case CATEGORY_LIST_REQUEST_FAILURE :
        return {...state,
            errorMsg: action.payload,
            isErrored: true,
            isLoading: false,
        
        };    
    default:
        return state;
    }
};

export default categoriesReducer;
