import React, { useEffect, useState } from "react";
import { test_data } from "../../TestData/TestData";
import Exam from "../../components/Exam/Exam";
import TableExam from "../../components/TableExam/TableExam";

const Main = () => {
  // const [exams, setExams] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:4000/api/index");
  //     const json = await response.json();

  //     if (response.ok) {
  //       console.log(json);
  //       setExams(json);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h2>Main Page</h2>
      <TableExam />
    </div>
  );
};

export default Main;
