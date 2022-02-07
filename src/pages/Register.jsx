import TextField from "@mui/material/TextField";
import shape from "../assets/images/shape.png";
import CustButton from "../assets/components/CustButton"

import { Formik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addUser } from '../assets/redux/actions/registerAction'

export default function Register() {
    const registerStyle = {
        display: "grid",
        gridTemplateRows: "25% 15% auto",
        height: "100%",
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <Formik
                initialValues={{
                    fullname: '',
                    role: 'user',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.fullname){
                        errors.fullname = 'Required';
                    }

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password){
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={async (values) => {
                    if (values.password !== values.confirmPassword) {
                        alert("password yang dimasukkan tidak sama")
                    } else if (values.password === values.confirmPassword) {
                        const newValues = {fullname: values.fullname, role: values.role, email: values.email, password: values.password}
                        await dispatch(addUser(newValues));
                        alert("Registrasi berhasil");
                        navigate('/login');
                    }
                }}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors
                }) =>{
                    return(
                        <form onSubmit={handleSubmit}>
                            <div style={{display: "grid", height: "100%", gridTemplateRows: "60% auto"}}>
                                <div style={{display: "grid", margin: "5% 5%"}}>
                                    <TextField
                                        label="Enter your fullname"
                                        id="fullname"
                                        name="fullname"
                                        onChange={handleChange}
                                        values={values.fullname}
                                    ></TextField>
                                    {errors.fullname ?(
                                        <div style={{fontSize:'15px', textAlign:'left', color: 'red', marginBottom: '5px'}}>*{errors.fullname}</div>
                                    ):null}
                                    <TextField
                                        label="Enter your email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        values={values.email}
                                    ></TextField>
                                    {errors.email ?(
                                        <div style={{fontSize:'15px', textAlign:'left', color: 'red', marginBottom: '5px'}}>*{errors.email}</div>
                                    ):null}
                                    <TextField
                                        label="Enter password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        values={values.password}
                                    ></TextField>
                                    {errors.password ?(
                                        <div style={{fontSize:'15px', textAlign:'left', color: 'red', marginBottom: '5px'}}>*{errors.password}</div>
                                    ):null}
                                    <TextField
                                        label="Confirm password"
                                        id="confirmPassword"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        values={values.confirmPassword}
                                    ></TextField>
                                </div>
                                <div>
                                    <CustButton text="Register" type="submit" />
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <span style={{margin: "2% 2% 0 0", fontSize: "14px"}}>Sudah punya akun?</span>
                                        <span style={{margin: "2% 2% 0 0", fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>
                                            <Link to="/login" style={{color: "#50C2C9", textDecoration: "none"}}>
                                                Sign In
                                            </Link>
                                        </span>
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