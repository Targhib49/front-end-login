import { useEffect } from 'react';

import TextField from "@mui/material/TextField";
import shape from "../assets/images/shape.png";
import login from "../assets/images/login.png";
import CustButton from "../assets/components/CustButton";

import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../assets/redux/actions/loginAction';

export default function Login() {
    const loginStyle = {
        display: "grid",
        gridTemplateRows: "25% 28% auto",
        height: '100%'
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.currentUser);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    
    useEffect(() => {
        if (isLoggedIn === true){
            if (currentUser[0].role === 'admin') {
                navigate('/dashboard')
            } else if (currentUser[0].role === 'user') {
                navigate('/verification')
            } else {
                alert("you're not a users")
            }
        }
    }, [isLoggedIn, currentUser, navigate]);

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
            <Formik
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

                    if (!values.password){
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={async (values) => {
                    await dispatch(loginUser(values));
                }}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched
                }) =>{
                    return(
                        <form onSubmit={handleSubmit}>
                            <div style={{display: 'grid', gridTemplateRows: "60% auto"}}>
                            <div>
                                <TextField
                                    label="Enter your email"
                                    style={{margin: "5% 0", width:'80%', backgroundColor: "#FFFFFF"}}
                                    required
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                <TextField
                                    label="Enter your password"
                                    style={{width:"80%", backgroundColor: "#FFFFFF"}}
                                    required
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    values={values.email}
                                ></TextField>
                            </div>
                            <div>
                                <p style={{fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>Lupa Password</p>
                                <CustButton text="Sign In" type="submit" />
                                <div style={{display:"flex", justifyContent: "center"}}>
                                    <span style={{margin: "2% 2% 0 0", fontSize: "14px"}}>Belum punya akun?</span>
                                    <span style={{margin: "2% 2% 0 0", fontSize: "14px", color: "#50C2C9", cursor: "pointer"}}>
                                        <Link to="/register" style={{color: "#50C2C9", textDecoration: "none"}}>
                                            Register
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