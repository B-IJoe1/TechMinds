import React from "react";
import "./Admin.css";
import TableExam from "../../components/TableExam/TableExam";

const Admin = () => {
    return (<div>
        <h1>Admin</h1>
        <p>This page is used to add, delete, or update exam records. You can also find a specific exam based on a
            number of attributes.</p>

        <div className="buttons">
            <button>Add New Exam</button>
            <br/>
            <br/><br/>
            <label>Find Exam by:  &nbsp;
                <select>
                    <option>Patient ID</option>
                    <option>Exam ID</option>
                    <option>Patient Age</option>
                    <option>Patient Sex</option>
                    <option>Zip Code</option>
                </select>
            </label>
            <input/>
            <button>Search</button>

        </div>

        <TableExam/>

    </div>);
}

export default Admin;