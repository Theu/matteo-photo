import {
    GET_LOCATION
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    location: ''
};

export const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOCATION: 
            return {
                ...state,
                isLoading: true
            };
        
        default:
            return state
    }
}