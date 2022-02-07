import axios from 'axios';

const apiURL = "https://login-pretest.herokuapp.com";

export const loginUser = (values) => {
    return (dispatch) => {
        return axios
                .post(`${apiURL}/users/login`, values)
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('refToken', response.data.refreshToken);
                    localStorage.setItem('isLoggedIn', true);
                    return axios
                            .get(`${apiURL}/users/id`, {
                                headers: { Authorization: `Bearer ${response.data.token}` }
                            })
                })
                .then((response) => {
                    dispatch(loginSuccess(response.data.currentUser));
                    dispatch(updateStatus(response.data.isLoggedIn));
                    axios
                        .put(`${apiURL}/users/addToken/${response.data.currentUser[0].user_id}`, { refreshToken: localStorage.getItem('refToken')})
                    return response    
                })
                .then((response) => {
                    return axios
                        .put(`${apiURL}/otp/send/${response.data.currentUser[0].user_id}`)
                })
                .then((response) => {
                    dispatch(updateOTP(response.data.url));
                })
                .catch((error) => {
                    console.log(error);
                    throw error;
                });
    };
};

export const newToken = (token) => {
    return () => {
        return axios
                .post(`${apiURL}/users/token`, { refreshToken: localStorage.getItem('refToken')})
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                });
    };
};

export const logout = (id) => {
    return () => {
        return axios
                .put(`${apiURL}/users/logout/${id}`, {})
                .then((response) => {});
    };
};

export const loginSuccess = (data) => {
    return {
        type: 'LOGIN',
        payload: {
            data
        }
    };
};

export const updateStatus = (data) => {
    return {
        type: 'UPDATE_LOGIN_STATUS',
        payload: {
            data
        }
    };
};

export const updateOTP = (data) => {
    return {
        type: 'GET_OTP',
        payload: {
            data
        }
    }
}