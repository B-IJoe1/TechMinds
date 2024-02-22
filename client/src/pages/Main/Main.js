import React, {useEffect, useState} from "react";
import { test_data } from "../../TestData/TestData";
import Exam from "../../components/Exam/Exam";

const Main = () => {

    const [exams, setExams] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/api/index');
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setExams(json);
            }

        }
        fetchData();
    }, []);



  return (
    <div>
      <div>

        {exams && exams.map((exam) => (
              <p key={exam._id}>{exam.examId}</p>
              // <Exam key={exam._id} exam={exam} />
          ))}


        {/*{test_data &&
          test_data.map((exam) => <Exam key={exam._id} exam={exam} />)}*/}
      </div>
    </div>
  );
};

export default Main;
