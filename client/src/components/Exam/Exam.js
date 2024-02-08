import React from "react";

const Exam = ({ exam }) => {
  return (
    <div>
      <h3>{exam.examId}</h3>
      <p>{exam.patientId}</p>
      <p>{exam.age}</p>
      <p>{exam.sex}</p>
      <p>{exam.bmi}</p>
      <p>{exam.zipCode}</p>
      <img src={exam.imageURL} alt="lung xray" />
    </div>
  );
};
export default Exam;
