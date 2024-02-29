import React from "react";
import MainTableExam from "../../components/MainTableExam/MainTableExam";
import Header from "../../components/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <p className="description">
        This page is used to view ALL exam records and patient details.
      </p>
      <MainTableExam />
    </div>
  );
};

export default Main;
