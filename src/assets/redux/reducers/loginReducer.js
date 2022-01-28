const loginReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload.data;
        default:
            return state;
    }
}

export default loginReducer;