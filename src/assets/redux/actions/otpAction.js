import axios from "axios";

const apiURL = "https://login-pretest.herokuapp.com";

export const sendOTP = (values) => {
    return(dispatch) => {
        return axios
                .post(`${apiURL}/otp/verify`, values)
                .then((response) => {
                    alert(response.data.message);
                })
                .catch((error) => {
                    alert("OTP not match");
                    throw error;
                })
    }
}