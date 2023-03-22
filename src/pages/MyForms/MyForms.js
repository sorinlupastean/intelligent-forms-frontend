import React, { useState } from "react";
import MyFormsCSS from "./MyForms.module.css";
import { ReactComponent as List } from "../../assets/list.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";

export default function MyForms() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [forms, setForms] = useState([
    {
      name: "Cerere de inmatriculare",
      createdAt: "04.03.2023",
      submissions: 5,
    },
  ]);

  const handleDeleteForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  const handleSerachInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={MyFormsCSS.container}>
      <div className={MyFormsCSS.top_bar}>
        <div className={MyFormsCSS.right_side}>
          <div className={MyFormsCSS.list_icon}>
            <List />
          </div>
          <div className={MyFormsCSS.list_text}>My Forms List</div>
        </div>
        <div className={MyFormsCSS.left_side}>
          <div className={MyFormsCSS.search_input}>
            <input
              type={"text"}
              placeholder="Search"
              value={searchTerm}
              onChange={handleSerachInputChange}
            ></input>
            <div className={MyFormsCSS.search_icon}>
              <Search />
            </div>
          </div>
          <div className={MyFormsCSS.add_new_btn}>
            <button onClick={() => navigate("/my-forms/create-form")}>
              <Plus />
              ADD NEW
            </button>
          </div>
        </div>
      </div>
      <table className={MyFormsCSS.table}>
        <thead>
          <tr className={MyFormsCSS.header}>
            <th>Name</th>
            <th>Created at</th>
            <th>Submissions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {forms
            .filter((form) =>
              form.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((form, index) => (
              <tr key={index} className={MyFormsCSS.submission}>
                <td>{form.name}</td>
                <td>{form.createdAt}</td>
                <td>{form.submissions}</td>
                <td>
                  <Delete onClick={() => handleDeleteForm(index)} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
