import axios from 'axios';

const apiURL = "https://login-pretest.herokuapp.com";

export const addUser = (values) => {
    return (dispatch) => {
        return axios
                .post(`${apiURL}/users`, values)
                .then((response) => {
                    console.log(response);
                    dispatch(addUserSuccess(response.data));
                    // dispatch(createStorage(response.data.data._id));
                })
                .catch((error) => {
                    alert(error.response.data);
                    throw error;
                });
    };
};

export const addUserSuccess = (data) => {
    return {
        type: 'POST_USER',
        payload: {data}
    };
};