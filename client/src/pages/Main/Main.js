import React from "react";
import { test_data } from "../../TestData/TestData";
import Exam from "../../components/Exam/Exam";

const Main = () => {
  return (
    <div>
      <div>
        {test_data &&
          test_data.map((exam) => <Exam key={exam._id} exam={exam} />)}
      </div>
    </div>
  );
};

export default Main;
