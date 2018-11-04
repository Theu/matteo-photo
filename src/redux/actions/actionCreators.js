import {
    GET_LOCATION_SUCCESS,
    LOAD_LOCATION_SUCCESS
} from './actionTypes';

export const getLocation = (location) => ({
    type: GET_LOCATION_SUCCESS,
    payload: location
})

export const loadLocation = () => ({
    type: LOAD_LOCATION_SUCCESS
})