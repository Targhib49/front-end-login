const loginStatusReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_LOGIN_STATUS':
            return action.payload.data;
        default:
            return state;
    }
}

export default loginStatusReducer;