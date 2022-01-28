import axios from 'axios';

const apiURL = process.env.API_URL;

export const loginUser = (values) => {
    return (dispatch) => {
        return axios
                .post(`${apiURL}/users/login`, values)
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('refToken', response.data.refreshToken);
                    localStorage.setItem('isLoggedIn', true);
                    dispatch(currentUser(response.data.token));
                })
                .catch((error) => {
                    alert(error.response.data);
                    throw error;
                });
    };
};

export const currentUser = (token) => {
    return (dispatch) => {
        return axios
                .get(`${apiURL}/users/id`, {
                    headers: { Authorization: 'Bearer ${token}' }
                })
                .then((response) => {
                    dispatch(loginSuccess(response.data.currentUser));
                    dispatch(updateStatus(response.data.isLoggedIn));
                    dispatch(addToken(response.data.currentUser._id));
                })
                .catch((error) => {
                    dispatch(newToken());
                });
    };
};

export const addToken = (id) => {
    return () => {
        return axios
                .put(`${apiURL}/users/addToken/${id}`, { refreshToken: localStorage.getItem('refToken')})
                .then((response) => {});
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