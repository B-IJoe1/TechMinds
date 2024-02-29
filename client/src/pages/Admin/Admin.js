import React from "react";
import TableExam from "../../components/TableExam/TableExam";
import Header from "../../components/Header/Header";
import "./Admin.css";

const Admin = () => {
  function handleSubmit() {
    window.location.href = "/newExam";
  }

  return (
    <div>
      <Header />
      <p className="description">
        This page is used to add, delete, or update exam records.
      </p>

      <div className="buttons">
        <button className="new_exam" onClick={() => handleSubmit()}>
          Add Exam
        </button>
      </div>

      <TableExam />
    </div>
  );
};

export default Admin;
