import {
    GET_LOCATION_SUCCESS,
    LOAD_LOCATION_SUCCESS,

    GET_IMAGE_SUCCESS
} from './actionTypes';

export const getLocation = (location) => ({
    type: GET_LOCATION_SUCCESS,
    payload: location
})

export const loadLocation = () => ({
    type: LOAD_LOCATION_SUCCESS
})

export const getImage = (image) => ({
    type: GET_IMAGE_SUCCESS,
    payload: image
})