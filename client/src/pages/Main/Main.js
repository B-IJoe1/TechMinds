import React, {useEffect} from "react";
import TableExam from "../../components/TableExam/TableExam";
import {useExamContext} from "../../hooks/useExamContext";

const Main = () => {
    /*const [exams, setExams] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:4000/api/index");
        const json = await response.json();

        if (response.ok) {
          console.log(json);
          setExams(json);
        }
      };
      fetchData();
    }, []);*/

    /*const {exams, dispatch} = useExamContext();

    useEffect(() => {
        const fetchExams = async () => {
            const response = await fetch("http://localhost:4000/api/index");
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_EXAMS', payload: json})
            }
        }

        fetchExams();
    }, [])*/

    return (
        <div>
            <h2>Main Page</h2>
            <TableExam/>
        </div>
    );
};

export default Main;
