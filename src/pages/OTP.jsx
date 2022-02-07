import { Formik } from "formik";

import CustButton from "../assets/components/CustButton";
import TextField from "@mui/material/TextField";

export default function Homepage () {
    return (
        <div>
            <p>Please check your email for OTP</p>
            <Formik
                initialValues={{
                    otp : ''
                }}
                onSubmit = {async (values) => {
                    console.log(values);
                }}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values
                }) => {
                    return(
                        <form onSubmit={handleSubmit}>
                            <div style={{display: 'grid', gridTemplateRows: "60% auto"}}>
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