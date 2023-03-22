import React, { useState } from "react";
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
  const [accountName, setAccountName] = useState();
  const [fiscalCode, setFiscalCode] = useState("");
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [accountType, setAccountType] = useState("individual");

  function signup() {
    if (accountType === "individual") {
      console.warn(accountName, address, email, password, confirmPassword);
      if (!accountName || !address || !email || !password || !confirmPassword) {
        console.error("Please fill in all required fields.");
      }
    } else if (accountType === "institution") {
      console.warn(accountName, address, email, password, confirmPassword);
      if (!accountName || !address || !email || !password || !confirmPassword) {
        console.error("Please fill in all required fields.");
      }
    } else if (accountType === "company") {
      console.warn(
        accountName,
        fiscalCode,
        address,
        email,
        password,
        confirmPassword
      );
      if (
        !accountName ||
        !fiscalCode ||
        !address ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        console.error("Please fill in all required fields.");
      }
    }
  }

  const handleButtonClick = (type) => {
    setAccountType(type);
  };
  return (
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
            <button
              className={CreateAccountPageCSS.type_of_account_btn}
              onClick={() => handleButtonClick("individual")}
              style={{
                backgroundColor: accountType === "individual" ? "#C9E0EF" : "",
              }}
            >
              Individual
            </button>
            <button
              onClick={() => handleButtonClick("company")}
              className={CreateAccountPageCSS.type_of_account_btn}
              style={{
                backgroundColor: accountType === "company" ? "#C9E0EF" : "",
              }}
            >
              Company
            </button>
            <button
              className={CreateAccountPageCSS.type_of_account_btn}
              onClick={() => handleButtonClick("institution")}
              style={{
                backgroundColor: accountType === "institution" ? "#C9E0EF" : "",
              }}
            >
              Institution
            </button>
          </div>
          <div className={CreateAccountPageCSS.signup_inputs}>
            <div className={CreateAccountPageCSS.container_input}>
              <AccountNameIcon className={CreateAccountPageCSS.inputs_logo} />
              <input
                type={"text"}
                placeholder="Account name"
                onChange={(e) => setAccountName(e.target.value)}
              ></input>
            </div>
            {accountType === "company" && (
              <div className={CreateAccountPageCSS.container_input}>
                <FiscalCode className={CreateAccountPageCSS.inputs_logo} />
                <input
                  type={"number"}
                  placeholder="Fiscal code"
                  onChange={(e) => setFiscalCode(e.target.value)}
                ></input>
              </div>
            )}
            <div className={CreateAccountPageCSS.container_input}>
              <Map className={CreateAccountPageCSS.inputs_logo} />
              <input
                type={"text"}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <div className={CreateAccountPageCSS.container_input}>
              <Email className={CreateAccountPageCSS.inputs_logo} />
              <input
                type={"email"}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={CreateAccountPageCSS.container_input}>
              <Lock className={CreateAccountPageCSS.inputs_logo} />
              <input
                type={"password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className={CreateAccountPageCSS.container_input}>
              <Lock className={CreateAccountPageCSS.inputs_logo} />
              <input
                type={"password"}
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
          </div>

          <Link
            to="/dashboard"
            className={CreateAccountPageCSS.signup_btn_link}
          >
            <button
              className={CreateAccountPageCSS.signup_btn}
              onClick={signup}
            >
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
  );
}

export default CreateAccountPage;
