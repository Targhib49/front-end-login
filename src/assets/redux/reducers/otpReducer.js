const otpReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_OTP':
            return action.payload.data;
        case 'SEND_OTP':
            return action.payload.data;
        default:
            return state;
    }
}

export default otpReducer