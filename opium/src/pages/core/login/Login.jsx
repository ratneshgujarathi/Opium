import React, { useState } from 'react';
import "./login.css";
import TextBox from '../../../components/textbox/TextBox';
import Button from '../../../components/buttons/Button';
import CheckBox from '../../../components/checkers/checkbox/CheckBox';
import Switch from '../../../components/checkers/switches/Switch';
import Toast from '../../../components/Toast/Toast';
import { loginApi } from '../utils';

function Login() {
  const [userNameVal, setUserNameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [rememberMe, setRemeberMe] = useState(false);
  const [loader, setLoader] = useState(false);
  const [toastAlert, setToastAlert] = useState({ show: false, message: "" })

  const submitHandler = async () => {
    if (userNameVal && passwordVal) {
      setLoader(true);
      try {
        let res = await loginApi({ username: userNameVal, password: passwordVal });
        localStorage.setItem("lKey", res.data.token);
        localStorage.setItem("rKey", res.data.refreshToken);
        setToastAlert({ show: true, message: res.msg })
      } catch (err) {
        setToastAlert({ show: true, message: err.msg })
      } finally {
        setLoader(false)
      }
    } else {
      setToastAlert({ show: true, message: "Fields can not be empty." })
    }
  }


  return (
    <div className="wrap">
      <div className="left-column">
        <div className="hero">
          <p className="kicker">Welcome Back !!</p>
          <h1>Your Trust <br />Our Priority<span className="dot">.</span></h1>
          <p>We missed you! 😊 Let's get you back in so you can continue exploring and enjoying all the amazing features we have to offer. Your journey awaits! Just a few quick details below, and you'll be right back in the action. We promise it won't take long!</p>
        </div>
      </div>
      <div className="right-column">
        <div className="form">
          <h2>Sign In</h2>
          <div>
            <TextBox name={"username"} label={"Username"} placeholder={"Username"} id={"username"} type={"text"} value={userNameVal} setValue={setUserNameVal} />
            <TextBox name={"password"} label={"Password"} placeholder={"Password"} id={"password"} type={"password"} value={passwordVal} setValue={setPasswordVal} />

            <Button className={"btn btn-primary"} buttonText={"Sign In"} onClick={submitHandler} />
          </div>
          <div className="forgotten">
            <Switch id={"remember"} labelName={"Remember Me"} setValue={setRemeberMe} checked={rememberMe} />
            <p className="forgot-link"><a href="#">Forgot password?</a></p>
          </div>
          <Button className="btn btn-secondary" buttonText={"Register"} onClick={submitHandler} loader={loader} />
        </div>

      </div>
      {toastAlert.show && <Toast setToast={() => { setToastAlert({ show: false, message: "" }) }} message={toastAlert.message} />}
    </div>
  )
}

export default Login