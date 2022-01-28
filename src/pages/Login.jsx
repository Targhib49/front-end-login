import TextField from "@mui/material/TextField";

import {Formik} from 'formik';

import shape from "../assets/images/shape.png";
import login from "../assets/images/login.png";

import CustButton from "../assets/components/CustButton";

export default function Login() {
    const loginStyle = {
        display: "grid",
        gridTemplateRows: "25% 28% auto",
        height: '100%'
    }

    return(
        <div className="loginContainer" style={loginStyle}>
            <div style={{display: "grid"}}>
                <img
                    alt="shape"
                    src={shape}
                    style={{width: '50%'}}
                />
            </div>
            <div>
                <p style={{fontSize: "18px", fontWeight: "600"}}>Selamat Datang Kembali</p>
                <img
                    alt="login"
                    src={login}
                />
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
                            <div style={{display: 'grid', gridTemplateRows: "60% auto"}}>
                            <div>
                                <TextField
                                    label="Enter your email"
                                    style={{margin: "5% 0", width:'80%', backgroundColor: "#FFFFFF"}}
                                ></TextField>
                                <TextField
                                    label="Enter your password"
                                    style={{width:"80%", backgroundColor: "#FFFFFF"}}
                                ></TextField>
                            </div>
                            <div>
                                <p style={{fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>Lupa Password</p>
                                <CustButton text="Sign In"/>
                                <div style={{display:"flex", justifyContent: "center"}}>
                                    <span style={{margin: "2% 2% 0 0", fontSize: "14px"}}>Belum punya akun?</span>
                                    <span style={{margin: "2% 2% 0 0", fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>Register</span>
                                </div>
                            </div>
                            </div>  
                        </form>
                    )
                }}
            </Formik>
            {/* <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }

                    return errors;
                }}
            > {({handleChange, handleSubmit, values, isSubmitting, errors, touched}) =>{
                return(
                    <form>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            // onChange={handleChange}
                            values={values.email}
                            size="small"
                        />
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // onChange={handleChange}
                            values={values.password}
                            size="small"
						/>
                    </form>
                )
            }}
            
            </Formik> */}

        </div>
    )
}