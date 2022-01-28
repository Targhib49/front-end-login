import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import shape from "../assets/images/shape.png";

import { Formik } from "formik";

import CustButton from "../assets/components/CustButton"

export default function Register() {
    const registerStyle = {
        display: "grid",
        gridTemplateRows: "25% 15% auto",
        height: "100%",
    }

    return(
        <div className="registerContainer" style={registerStyle}>
            <div style={{display: "grid"}}>
                <img
                    alt="shape"
                    src={shape}
                />
            </div>
            <div>
                <p style={{fontSize: "18px", fontWeight: "600"}}>Selamat Datang Sobat Sertifikasiku</p>
                <p style={{fontSize: "13 px", fontWeight: "400"}}>Kami siap membantu anda untuk menjadi kompeten</p>
            </div>
            <Formik>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    isSubmitting,
                    errors,
                    touched
                }) =>{
                    return(
                        <form>
                            <div style={{display: "grid", height: "100%", gridTemplateRows: "60% auto"}}>
                                <div style={{display: "grid", margin: "5% 5%"}}>
                                    <TextField
                                        label="Enter your fullname"
                                    ></TextField>
                                    <TextField
                                        label="Enter your email"
                                    ></TextField>
                                    <TextField
                                        label="Enter password"
                                    ></TextField>
                                    <TextField
                                        label="Confirm password"
                                    ></TextField>
                                </div>
                                <div>
                                    <CustButton text="Register" />
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <span style={{margin: "2% 2% 0 0", fontSize: "14px"}}>Sudah punya akun?</span>
                                        <span style={{margin: "2% 2% 0 0", fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>Sign In</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}