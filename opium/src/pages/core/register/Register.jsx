import React, { useState } from 'react';
import "./register.css";
import TextBox from '../../../components/textbox/TextBox';
import Button from '../../../components/buttons/Button';


function Register() {
    const [userNameVal, setUserNameVal] = useState("");
    const [fullNameVal, setFullNameVal] = useState("");
    const [email, setEmail] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [confPasswordVal, setConfPasswordVal] = useState("");
    const [errorObj, setErrorObj] = useState({
        error: false,
        text: ""
    });
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
                        <TextBox name={"username"} label={"Username"} placeholder={"Username"} id={"username"} type={"text"} value={userNameVal} setValue={setUserNameVal} />
                        <TextBox name={"fullname"} label={"Full Name"} placeholder={"Full Name"} id={"fullname"} type={"text"} value={fullNameVal} setValue={setFullNameVal} />
                        <TextBox name={"email"} label={"Email"} placeholder={"Email"} id={"email"} type={"text"} value={email} setValue={setEmail} />
                        <TextBox name={"password"} label={"Password"} placeholder={"Password"} id={"password"} type={"password"} value={passwordVal} setValue={setPasswordVal} />
                        <TextBox name={"cpassword"} label={"Confirm Password"} placeholder={"Confirm Password"} id={"cpassword"} type={"password"} value={confPasswordVal} setValue={setConfPasswordVal} />
                        {errorObj.error && <div className='error errorText'>{errorObj.text}</div>}
                        <Button className={"btn btn-primary"} buttonText={"Sign Up"} onClick={() => { alert("Hello") }} />
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register