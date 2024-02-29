import React from 'react';
import ExamForm from "../../components/ExamForm/ExamForm";
import "../../components/ExamForm/ExamForm.css";

const newExam = () => {
    return (
        <div>
            <h1>New Exam</h1>
            <ExamForm />
        </div>
    );
}

export default newExam;