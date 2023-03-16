import React from "react";
import SignInPageCSS from "./SignInPage.module.css";
import { ReactComponent as IllustrationLogPage } from "../../assets/illustration-log-page.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";

function SignInPage() {
  return (
    <>
      <div className={SignInPageCSS.page}>
        <div className={SignInPageCSS.container}>
          <div className={SignInPageCSS.cover}>
            <div className={SignInPageCSS.logo}>
              <Logo width={"160px"} height="50px" />
            </div>
            <h1 className={SignInPageCSS.login_title}>Login to your Account</h1>

            <div className={SignInPageCSS.login_inputs}>
              <div className={SignInPageCSS.container_input}>
                <Email className={SignInPageCSS.inputs_logo} />
                <input type={"email"} placeholder="Email" />
              </div>
              <div className={SignInPageCSS.container_input}>
                <Lock className={SignInPageCSS.inputs_logo} />
                <input type={"password"} placeholder="Password"></input>
              </div>
            </div>
            <Link to="/dashboard" className={SignInPageCSS.sign_in_link}>
              <button className={SignInPageCSS.signin_btn}>SIGN IN</button>
            </Link>
            <p className={SignInPageCSS.login_text}>
              Don’t have an account?
              <Link to="/sign-up-page" className={SignInPageCSS.signup_link}>
                Sign up
              </Link>
            </p>
          </div>
          <div className={SignInPageCSS.side}>
            <IllustrationLogPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
