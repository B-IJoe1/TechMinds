import React from "react";
import { test_data } from "../../TestData/TestData";
import Exam from "../../components/Exam/Exam";
import { useParams } from "react-router-dom";

const SingleExam = () => {
    const { patientId } = useParams();


    const patientCases = test_data.filter(item => item.patientId === patientId);

    return (
        <div>
            <h1>Cases for Patient: {patientId}</h1>
            <ul>
                {patientCases.map((item, index) => (
                    <li key={index}>
                        <strong>Exam ID:</strong> {item.examId}, <strong>Patient ID:</strong> {item.patientId},
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SingleExam;
