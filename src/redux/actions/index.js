export function readLocation({ location }) {
    return {
        type: 'GET_LOCATION',
        payload: {
            location,
        },
    };
}