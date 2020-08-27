const initialState = {
    socket: null,
}
let socket = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SOCKET":
            return {
                ...state,
                socket: action.payload
            };

        default:
            return state;
    }
}
export default socket;