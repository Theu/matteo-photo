export default function getLocation(state = { pageLocation: ''}, action) {
    if (action.type === 'GET_LOCATION') {
        return {
            pageLocation: 'fuck'
        };
    }

    return state
}