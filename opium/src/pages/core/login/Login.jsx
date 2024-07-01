import React, { useState } from 'react';
import "./login.css";
import TextBox from '../../../components/textbox/TextBox';
import Button from '../../../components/buttons/Button';

function Login() {
  const [userNameVal, setUserNameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  return (
    <div class="wrap">
      <div class="left-column">
        <div class="hero">
          <p class="kicker">Welcome Back !!</p>
          <h1>Your Trust <br />Our Priority<span class="dot">.</span></h1>
          <p>We missed you! 😊 Let's get you back in so you can continue exploring and enjoying all the amazing features we have to offer. Your journey awaits! Just a few quick details below, and you'll be right back in the action. We promise it won't take long!</p>
        </div>
      </div>
      <div class="right-column">
        <div class="form">
          <h2>Sign In</h2>
          <div>
            <TextBox name={"username"} label={"Username"} placeholder={"Username"} id={"username"} type={"text"} value={userNameVal} setValue={setUserNameVal} />
            <TextBox name={"password"} label={"Password"} placeholder={"Password"} id={"password"} type={"password"} value={passwordVal} setValue={setPasswordVal} />
            <Button className={"btn btn-primary"} buttonText={"Sign In"} onClick={() => { alert("Hello") }} />
          </div>
          <div class="forgotten">
            <label class="remember"><input type="checkbox" value="remember-me" /> Remember Me</label>
            <p class="forgot-link"><a href="#">Forgot password?</a></p>
          </div>
          <Button className="btn btn-secondary" buttonText={"Register"} onClick={() => { alert("hello 2") }} />
        </div>

      </div>
    </div>
  )
}

export default Login