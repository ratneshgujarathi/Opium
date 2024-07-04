import React, { useState } from 'react';
import "./register.css";
import TextBox from '../../../components/textbox/TextBox';
import Button from '../../../components/buttons/Button';
import { validate } from '../../../utils/validations';
import { registerApi } from './utils';
import Toast from '../../../components/Toast/Toast';


function Register() {
    const [userNameVal, setUserNameVal] = useState("");
    const [fullNameVal, setFullNameVal] = useState("");
    const [email, setEmail] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [confPasswordVal, setConfPasswordVal] = useState("");
    const [loader, setLoader] = useState(false);
    const [errorObj, setErrorObj] = useState({
        error: false,
        text: ""
    });
    const [toastAlert, setToastAlert] = useState({ show: false, message: "" })
    const submitHandler = () => {
        if (userNameVal && fullNameVal && email && passwordVal && confPasswordVal) {
            if (validate.validateEmail(email)) {
                if (passwordVal === confPasswordVal) {
                    if (passwordVal.length > 8) {
                        const [firstName, lastName] = fullNameVal.split(" ");
                        const payload = { firstname: firstName, lastname: lastName, email: email, password: passwordVal, username: userNameVal };
                        setLoader(true);
                        registerApi(payload).then((res) => {
                            localStorage.setItem("lKey", res.data.token);
                            localStorage.setItem("rKey", res.data.refreshToken);
                            setToastAlert({ show: true, message: res.msg })
                            setLoader(false);
                        }
                        ).catch((err) => {
                            setToastAlert({ show: true, message: err.msg })
                            setLoader(false);
                        })
                    } else {
                        setToastAlert({ show: true, message: "Password length minimum 8 characters is required" })
                    }
                } else {
                    setToastAlert({ show: true, message: "Confirm password is not matched with password." })
                }
            } else {
                setToastAlert({ show: true, message: "Invalid Email Address. " })
            }
        } else {
            setToastAlert({ show: true, message: "Fields can not be empty." })
        }
    }

    const userNameValHandler = (val) => {
        setErrorObj({
            error: false,
            text: ""
        });
        setUserNameVal(val);
    }

    const fullNameValHandler = (val) => {
        setErrorObj({
            error: false,
            text: ""
        });
        setFullNameVal(val);
    }

    const passlHandler = (val) => {
        setErrorObj({
            error: false,
            text: ""
        });
        setPasswordVal(val);
    }

    const confPassHandler = (val) => {
        setErrorObj({
            error: false,
            text: ""
        });
        setConfPasswordVal(val);
    }

    const emailHandler = (val) => {
        setErrorObj({
            error: false,
            text: ""
        });
        setEmail(val);
    }


    return (
        <div className="wrap">
            <div className="left-column">
                <div className="hero">
                    <p className="kicker">Join Our Community! </p>
                    <h1>Your Trust <br />Our Priority<span className="dot">.</span></h1>
                    <p>You have come this far. Join us today and gain access to exclusive content and features!</p>
                </div>
            </div>
            <div className="right-column">
                <div className="form">
                    <h2>Sign Up</h2>
                    <div>
                        <TextBox name={"username"} label={"Username"} placeholder={"Username"} id={"username"} type={"text"} value={userNameVal} setValue={userNameValHandler} />
                        <TextBox name={"fullname"} label={"Full Name"} placeholder={"Full Name"} id={"fullname"} type={"text"} value={fullNameVal} setValue={fullNameValHandler} />
                        <TextBox name={"email"} label={"Email"} placeholder={"Email"} id={"email"} type={"text"} value={email} setValue={emailHandler} />
                        <TextBox name={"password"} label={"Password"} placeholder={"Password"} id={"password"} type={"password"} value={passwordVal} setValue={passlHandler} />
                        <TextBox name={"cpassword"} label={"Confirm Password"} placeholder={"Confirm Password"} id={"cpassword"} type={"password"} value={confPasswordVal} setValue={confPassHandler} />
                        {errorObj.error && <div className='error errorText'>{errorObj.text}</div>}
                        <Button className={"btn btn-primary"} buttonText={"Sign Up"} onClick={submitHandler} loader={loader} />

                    </div>
                </div>

            </div>
            {toastAlert.show && <Toast setToast={() => { setToastAlert({ show: false, message: "" }) }} message={toastAlert.message} />}
        </div>
    )
}

export default Register