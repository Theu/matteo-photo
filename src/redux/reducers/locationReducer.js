import {
    GET_LOCATION_SUCCESS,
    LOAD_LOCATION_SUCCESS
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    location: ''
};

export const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOCATION_SUCCESS: 
            return {
                ...state,
                isLoading: true,
                location: action.payload
            };

        case LOAD_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };

        
        default:
            return state
    }
}