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
        </div>
        <div className={FillFormCSS.containers}>
          <div className={FillFormCSS.fill_form}>
            <div className={FillFormCSS.input_cover}>
              Nume
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Prenume
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              CNP
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Localitate
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Strada
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Numar
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Bloc
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Scara
              <input type={"text"}></input>
            </div>
            <div className={FillFormCSS.input_cover}>
              Etaj
              <input type={"text"}></input>
            </div>
          </div>
          <div className={FillFormCSS.cerere}></div>
        </div>
      </div>
    </>
  );
}

export default FillForm;
