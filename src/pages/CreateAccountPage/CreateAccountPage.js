import React from "react";
import { Link } from "react-router-dom";
import CreateAccountPageCSS from "./CreateAccountPage.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as IllustrationLogPage } from "../../assets/illustration-log-page.svg";
import { ReactComponent as AccountNameIcon } from "../../assets/account.svg";
import { ReactComponent as FiscalCode } from "../../assets/receipt.svg";
import { ReactComponent as Map } from "../../assets/map.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";

function CreateAccountPage() {
  return (
    <>
      <div className={CreateAccountPageCSS.page}>
        <div className={CreateAccountPageCSS.container}>
          <div className={CreateAccountPageCSS.cover}>
            <div className={CreateAccountPageCSS.logo}>
              <Logo width={"160px"} height="50px" />
            </div>
            <h1 className={CreateAccountPageCSS.create_account}>
              Create Account
            </h1>
            <div className={CreateAccountPageCSS.type_of_account}>
              <button className={CreateAccountPageCSS.type_of_account_btn}>
                Individual
              </button>
              <button className={CreateAccountPageCSS.type_of_account_btn}>
                Company
              </button>
              <button className={CreateAccountPageCSS.type_of_account_btn}>
                Institution
              </button>
            </div>
            <div className={CreateAccountPageCSS.signup_inputs}>
              <div className={CreateAccountPageCSS.container_input}>
                <AccountNameIcon className={CreateAccountPageCSS.inputs_logo} />
                <input type={"text"} placeholder="Account name"></input>
              </div>
              <div className={CreateAccountPageCSS.container_input}>
                <FiscalCode className={CreateAccountPageCSS.inputs_logo} />
                <input type={"number"} placeholder="Fiscal code"></input>
              </div>
              <div className={CreateAccountPageCSS.container_input}>
                <Map className={CreateAccountPageCSS.inputs_logo} />
                <input type={"text"} placeholder="Address"></input>
              </div>
              <div className={CreateAccountPageCSS.container_input}>
                <Email className={CreateAccountPageCSS.inputs_logo} />
                <input type={"email"} placeholder="Email" />
              </div>
              <div className={CreateAccountPageCSS.container_input}>
                <Lock className={CreateAccountPageCSS.inputs_logo} />
                <input type={"password"} placeholder="Password"></input>
              </div>
              <div className={CreateAccountPageCSS.container_input}>
                <Lock className={CreateAccountPageCSS.inputs_logo} />
                <input type={"password"} placeholder="Confirm password"></input>
              </div>
            </div>

            <Link
              to="/dashboard"
              className={CreateAccountPageCSS.signup_btn_link}
            >
              <button className={CreateAccountPageCSS.signup_btn}>
                SIGN UP
              </button>
            </Link>

            <p className={CreateAccountPageCSS.signin_text}>
              Already have an account?
              <Link
                to="/sign-in-page"
                className={CreateAccountPageCSS.signin_link}
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className={CreateAccountPageCSS.side}>
            <IllustrationLogPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccountPage;
