import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import loginStatusReducer from './loginStatusReducer';

const allReducers = combineReducers({
    currentUser: loginReducer,
    userRegister: registerReducer,
    isLoggedIn: loginStatusReducer
});

export default allReducers;