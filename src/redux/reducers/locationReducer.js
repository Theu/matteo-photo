import {
    GET_LOCATION_SUCCESS,
    LOAD_LOCATION_SUCCESS,

    GET_IMAGE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    location: '',
    image: ''
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
                location: action.payload
            };

        case GET_IMAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                image: action.payload
            }

        
        default:
            return state
    }
}