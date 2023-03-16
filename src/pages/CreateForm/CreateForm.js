import React, { useState } from "react";
import CreateFormCSS from "./CreateForm.module.css";
import { ReactComponent as Back } from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import Todo from "../../components/DynamicField/DynamicField";

function CreateForm() {
  const [labelInput, setLabelInput] = useState("");
  const [placeholderInput, setPlaceholderInput] = useState("");
  const [fieldTypeInput, setFieldTypeInput] = useState("");
  const [dynamicFields, setDynamicFields] = useState([]);

  const navigate = useNavigate();

  const addDynamicFieldHandler = (e) => {
    e.preventDefault();
    setDynamicFields([
      ...dynamicFields,
      {
        id: Math.random() * 1000,
        label: labelInput,
        placehoder: placeholderInput,
        fieldType: fieldTypeInput,
      },
    ]);

    setLabelInput("");
    setPlaceholderInput("");
    setFieldTypeInput("");
  };

  return (
    <div className={CreateFormCSS.container}>
      <div className={CreateFormCSS.back_cover}>
        <div className={CreateFormCSS.back_icon}>
          <Back onClick={() => navigate("/my-forms")} />
        </div>
      </div>
      <div className={CreateFormCSS.components}>
        <div className={CreateFormCSS.left_side}>
          <div className={CreateFormCSS.section_cover}>
            <div>Title</div>
            <input
              value={labelInput}
              onChange={(e) => setLabelInput(e.target.value)}
              type={"text"}
            ></input>
          </div>

          <div className={CreateFormCSS.section}>
            <div className={CreateFormCSS.section_cover}>
              <div>Label</div>
              <input
                value={labelInput}
                onChange={(e) => setLabelInput(e.target.value)}
                type={"text"}
              ></input>
            </div>
            <div className={CreateFormCSS.section_cover}>
              <div>Placeholder</div>
              <input
                value={placeholderInput}
                onChange={(e) => setPlaceholderInput(e.target.value)}
                type={"text"}
              ></input>
            </div>
            <div className={CreateFormCSS.section_cover}>
              <div>Field Type</div>
              <input
                value={fieldTypeInput}
                onChange={(e) => setFieldTypeInput(e.target.value)}
                type={"text"}
              ></input>
            </div>
            <div className={CreateFormCSS.add_new_field}>
              <button onClick={addDynamicFieldHandler} type="submit">
                <Plus />
              </button>
            </div>
          </div>

          <div className={CreateFormCSS.field_cover}>
            {dynamicFields.map((dynamicField) => (
              <Todo
                setDynamicFields={setDynamicFields}
                dynamicFields={dynamicFields}
                key={dynamicField.id}
                dynamicField={dynamicField}
              />
            ))}
          </div>
        </div>

        <div className={CreateFormCSS.right_side}>
          <div className={CreateFormCSS.cerere_container}>
            <div className={CreateFormCSS.text}>Content</div>
            <div className={CreateFormCSS.cerere}></div>
          </div>
        </div>
      </div>

      <div className={CreateFormCSS.footer_bar}>
        <div className={CreateFormCSS.left_cover}>
          <div className={CreateFormCSS.retention_period_text}>
            Data Retention Period
          </div>
          <div className={CreateFormCSS.retention_period_cover}>
            <input type="number" className={CreateFormCSS.time_value}></input>
            {/* replace with dropdown here */}
            <div className={CreateFormCSS.time_unit}>days</div>
          </div>
        </div>
        <div className={CreateFormCSS.right_cover}>
          <button>CREATE</button>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
