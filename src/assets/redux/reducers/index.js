import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import loginStatusReducer from './loginStatusReducer';
import otpReducer from './otpReducer';

const allReducers = combineReducers({
    currentUser: loginReducer,
    userRegister: registerReducer,
    isLoggedIn: loginStatusReducer,
    otp: otpReducer
});

export default allReducers;