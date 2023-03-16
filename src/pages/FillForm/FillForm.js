import React from "react";
import FillFormCSS from "./FillForm.module.css";
import { ReactComponent as Back } from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

function FillForm() {
  const navigate = useNavigate();
  return (
    <>
      <div className={FillFormCSS.container}>
        <div className={FillFormCSS.back_btn}>
          <Back onClick={() => navigate("/submissions")} cursor="pointer" />
          <div>Submissions</div>
        </div>
        <div className={FillFormCSS.containers}>
          <div className={FillFormCSS.fill_form}>
            <div className={FillFormCSS.input_cover}>
              Nume
              <div className={FillFormCSS.input}>
                <input type={"text"}></input>
              </div>
            </div>
          </div>
          <div className={FillFormCSS.cerere}></div>
        </div>
      </div>
    </>
  );
}

export default FillForm;
