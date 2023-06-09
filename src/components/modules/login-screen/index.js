import React, { useRef, useState } from "react";
import "./index.css";
import { AppIcons, AppImages } from "../../../constant/image";
import Input from "../../widgets/input";
import {
  emailValidationHandler,
  passwordValidationHandler,
} from "../../../helper-function/index";
import { InputText, ValidationError } from "../../../constant/text";
const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const userEmailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    const userEmail = userEmailRef.current.value;
    const password = passwordRef.current.value;

    const isValidEmail = emailValidationHandler(userEmail);

    if (!isValidEmail) {
      alert(ValidationError.emailValidationError);
      return;
    }
    const isValidPassword = passwordValidationHandler(password);
    console.log(isValidPassword);
    if (!isValidPassword) {
      alert(ValidationError.passWordValidationError);
      return;
    }
    userEmailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login-screen">
      <div className="left-side">
        <img src={AppImages.CoverPic} alt="Wallpaper" />
      </div>
      <div className="right-side">
        <div className="logoSection">
          <div className="logoStyle">
            <img className="logo" src={AppIcons.Logo} alt="Company Logo" />
          </div>
          <div>
            <span className="welcome-text logo-slogan-1">Welcome</span>
            <span className="teal-color-text logo-slogan-1"> Back!</span>
          </div>
          <span className="logo-slogan-2 steel-blue-text">
            Glad to see you, Again!
          </span>
        </div>

        <div className="login-content">
          <Input
            inputStyle={{
              width: "63%",
            }}
            type={"text"}
            ref={userEmailRef}
            placeholder={InputText.email}
          />
          <Input
            inputStyle={{
              width: "63%",
            }}
            type={passwordVisible ? "text" : "password"}
            ref={passwordRef}
            iconStyle={{ width: "25px" }}
            placeholder={InputText.password}
            rightIcon={AppIcons.VisiblePasswordIcon}
            iconHandler={() => setPasswordVisible(!passwordVisible)}
          />
          <div style={{ width: "55%", alignSelf: "end" }}>
            <span className="signUp-section-long-text steel-blue-text">
              Forgot Password?
            </span>
          </div>
          <div className="button" onClick={handleLogin}>
            <text className="button-text">Log In</text>
          </div>
        </div>
        <div>
          <span className="signUp-section-long-text steel-blue-text">
            Don’t an account yet?
          </span>
          <span className="signUp-section-long-text teal-color-text">
            {" "}
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
