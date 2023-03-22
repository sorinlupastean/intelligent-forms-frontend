import React, { useState } from "react";
import CreateFormCSS from "./CreateForm.module.css";
import { ReactComponent as Back } from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import DynamicField from "../../components/DynamicField/DynamicField";

function CreateForm() {
  const [titleInput, setTitleInput] = useState("");
  const [labelInput, setLabelInput] = useState("");
  const [placeholderInput, setPlaceholderInput] = useState("");
  const [fieldType, setFieldType] = useState("");
  const [dynamicFields, setDynamicFields] = useState([]);
  const [canAddField, setCanAddField] = useState(false);

  const navigate = useNavigate();

  const addDynamicFieldHandler = (e) => {
    e.preventDefault();
    setDynamicFields([
      ...dynamicFields,
      {
        id: Math.random() * 1000,
        label: labelInput,
        placeholder: placeholderInput,
        fieldType: fieldType,
      },
    ]);

    setLabelInput("");
    setPlaceholderInput("");
    setFieldType("");
  };

  const handleCreateForm = (e) => {
    navigate("/my-forms");
  };

  const checkCanAddField = () => {
    if (labelInput !== "" && placeholderInput !== "") {
      setCanAddField(true);
    } else {
      setCanAddField(false);
    }
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
          <div className={CreateFormCSS.form_title}>
            <div>Title</div>
            <input
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              type={"text"}
            ></input>
          </div>
          <div className={CreateFormCSS.cerere_container}>
            <div className={CreateFormCSS.text}>Content</div>
            <div className={CreateFormCSS.cerere}>
              <RichTextEditor />
            </div>
          </div>
        </div>
        <div className={CreateFormCSS.right_side}>
          <div className={CreateFormCSS.section}>
            <div className={CreateFormCSS.section_cover}>
              <div>Label</div>
              <input
                value={labelInput}
                onChange={(e) => {
                  setLabelInput(e.target.value);
                  checkCanAddField();
                }}
                type={"text"}
              ></input>
            </div>
            <div className={CreateFormCSS.section_cover}>
              <div>Placeholder</div>
              <input
                value={placeholderInput}
                onChange={(e) => {
                  setPlaceholderInput(e.target.value);
                  checkCanAddField();
                }}
                type={"text"}
              ></input>
            </div>
            <div className={CreateFormCSS.section_cover}>
              <label for="fieldType">Field Type</label>
              <select
                name="fieldType"
                id="fieldType"
                value={fieldType}
                onChange={(e) => setFieldType(e.target.value)}
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="decimal">Decimal</option>
                <option value="date">Date</option>
                <option value="single-choice">Single-choice</option>
                <option value="multiple-choice">Multiple-choice</option>
              </select>
            </div>
            <div className={CreateFormCSS.add_new_field}>
              <button
                onClick={addDynamicFieldHandler}
                type="submit"
                disabled={!canAddField}
              >
                <Plus />
              </button>
            </div>
          </div>

          <div className={CreateFormCSS.field_cover}>
            {dynamicFields.map((dynamicField) => (
              <DynamicField
                setDynamicFields={setDynamicFields}
                dynamicFields={dynamicFields}
                key={dynamicField.id}
                dynamicField={dynamicField}
              />
            ))}
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
          <button onClick={handleCreateForm}>CREATE</button>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
