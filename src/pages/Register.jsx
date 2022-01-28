import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import shape from "../assets/images/shape.png";

import { Formik } from "formik";

export default function Register() {
    return(
        <div>
            <Box
                component="img"
                alt="shape"
                src={shape}
            />
            <p>Selamat Datang Sobat Sertifikasiku</p>
            <p>Kami siap membantu anda untuk menjadi kompeten</p>
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
                            <Button>Register</Button>
                            <p>Sudah punya akun? Sign In</p>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}