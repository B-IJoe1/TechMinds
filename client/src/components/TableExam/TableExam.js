import * as React from "react";
import {useCallback, useEffect, useState} from "react";
//table-library imports
import {useTheme} from "@table-library/react-table-library/theme";
import {CompactTable} from "@table-library/react-table-library/compact";
import './TableExam.css';


const TableExam = () => {
    const [exams, setExams] = useState([]);
    // const { exams, dispatch } = useExamContext();

    const fetchData = useCallback(async () => {
        const response = await fetch("http://localhost:4000/api/index");
        return await response.json();
    }, []);

    useEffect(() => {
        fetchData().then((apiData) => {
            setExams(apiData);
            //   dispatch({ type: "SET_EXAMS", payload: apiData });
        });
    }, [fetchData]);
    console.log(exams);


    const data = {nodes: exams};

    const theme = useTheme({
        HeaderRow: ` background-color: #eaf5fd;`,
        BaseCell: ` text-align: center;`,
        Row: ` &:hover .td {
        border-top: 1px solid orange;
        border-bottom: 1px solid orange;            
        }
        
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
        
        .td {
        text-align: center;
        }`,
    });

    function handleDelete(_id) {

        if (!window.confirm("Are you sure you want to delete this exam?")) return;


        fetch(`http://localhost:4000/api/index/${_id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                // dispatch({ type: "DELETE_EXAM", payload: _id });
                fetchData().then((apiData) => {
                    setExams(apiData);
                    // dispatch({ type: "SET_EXAMS", payload: apiData });
                });
            }
        });
        alert("Exam deleted successfully!")
    }

    function handleDetails(patientId) {
        window.location.href = `/Details/${patientId}`
    }

    const COLUMNS = [
        { label: "Exam ID", renderCell: (item) => item.examId},
        { label: "Patient ID", renderCell: (item) => item.patientId},  { label: "Age", renderCell: (item) => item.age},
        { label: "Sex", renderCell: (item) => item.sex},
        { label: "BMI", renderCell: (item) => item.bmi},
        { label: "Zip Code", renderCell: (item) => item.zipCode},
        { label: "Image", renderCell: (item) => (<img src={item.imageURL} width={100} height={60} alt="lung xray"/>),},
        { label: "Patient Details", renderCell: (item) => (<span className="material-symbols-rounded" onClick={() => handleDetails(item.patientId)}>patient_list
                    <a href={`/Details/${item.patientId}`} className="link"> </a></span>)},
        { label: "Delete",renderCell: (item) => (<span className="material-symbols-rounded" onClick={() => handleDelete(item._id)}>Delete</span>),},
        { label: "Update", renderCell: (item) => (<span className="material-symbols-rounded" onClick={() => window.location.href = `/updateExam/${item.patientId}`}>person_edit</span>), },
    ];

    return (<CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
    />);
};

export default TableExam;
