import React from "react";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import DynamicFieldCSS from "./DynamicField.module.css";

function DynamicField({ dynamicField, dynamicFields, setDynamicFields }) {
  const deleteHandler = () => {
    setDynamicFields(dynamicFields.filter((el) => el.id !== dynamicField.id));
  };

  return (
    <div className={DynamicFieldCSS.label}>
      <div>{dynamicField.label}</div>
      <button onClick={deleteHandler} className={DynamicFieldCSS.trash_btn}>
        <Delete color="#001845" />
      </button>
    </div>
  );
}

export default DynamicField;
