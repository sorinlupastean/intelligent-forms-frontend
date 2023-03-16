import React from "react";
import SubmissionCSS from "./Submissions.module.css";
import { ReactComponent as Filter } from "../../assets/filter.svg";
import { ReactComponent as Sort } from "../../assets/arrow-down.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";

function Submissions() {
  const navigate = useNavigate();
  return (
    <>
      <div className={SubmissionCSS.container}>
        <div className={SubmissionCSS.top_bar}>
          <div className={SubmissionCSS.btns}>
            <div className={SubmissionCSS.filter}>
              <Filter />
              <p>Filter</p>
            </div>
            <div className={SubmissionCSS.sort}>
              <Sort />
              <p>Sort</p>
            </div>
          </div>
          <div className={SubmissionCSS.search}>
            <input type={"text"} placeholder="Search"></input>
            <Search />
          </div>
        </div>
        <table className={SubmissionCSS.table}>
          <thead>
            <tr className={SubmissionCSS.header}>
              <th>Submitted at</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>CNP</th>
              <th>City</th>
              <th>Street</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={SubmissionCSS.submission}
              onClick={() => navigate("/submissions/id")}
            >
              <td>04.03.2023</td>
              <td>Lupaștean</td>
              <td>Sorin</td>
              <td>938041526</td>
              <td>Suceava</td>
              <td>George Enescu</td>
              <td>
                <Delete />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Submissions;
