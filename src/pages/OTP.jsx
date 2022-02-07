import { useEffect } from "react";

import CustButton from "../assets/components/CustButton";
import TextField from "@mui/material/TextField";

import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOTP } from "../assets/redux/actions/otpAction";

export default function Homepage () {
    const dispatch = useDispatch();
    const otp = useSelector((state) => state.otp);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (otp !== "" ) {
    //         console.log(otp);
    //     }
    // })

    return (
        <div>
            <p>Click this link to get OTP</p>
            {otp !== "" ? (
                <a href={otp} target="_blank">OTP LINK</a>
            ):null}
            <Formik
                initialValues={{
                    otp : ''
                }}
                onSubmit = {async (values) => {
                    const newValues = {input: values.otp};
                    await dispatch(sendOTP(newValues));
                    navigate("/homepage");
                }}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values
                }) => {
                    return(
                        <form onSubmit={handleSubmit}>
                            <div style={{display: 'grid', gridTemplateRows: "60% auto", justifyItems: "center"}}>
                            <TextField
                                    label="Enter your OTP"
                                    style={{margin: "5% 0", width:'80%', backgroundColor: "#FFFFFF"}}
                                    required
                                    id="otp"
                                    name="otp"
                                    onChange={handleChange}
                                    values={values.otp}
                                />
                            <CustButton text="VERIFY" type="submit" />
                            </div>
                        </form>
                    )
                }
                    
                }

            </Formik>
        </div>
    )
}