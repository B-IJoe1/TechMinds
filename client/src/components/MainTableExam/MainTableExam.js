import * as React from "react";
import {useCallback, useEffect, useState} from "react";
//table-library imports
import {useTheme} from "@table-library/react-table-library/theme";
import {CompactTable} from "@table-library/react-table-library/compact";

const TableExam = () => {
    const [exams, setExams] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch("http://localhost:4000/api/index");
        return await response.json();
    }, []);

    useEffect(() => {
        fetchData().then((apiData) => {
            setExams(apiData);
        });
    }, [fetchData]);

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

    function handleDetails(patientId) {
        window.location.href = `/Details/${patientId}`
    }

    const COLUMNS = [
        { label: "Exam ID", renderCell: (item) => item.examId},
        { label: "Patient ID", renderCell: (item) => item.patientId},
        { label: "Age", renderCell: (item) => item.age},
        { label: "Sex", renderCell: (item) => item.sex},
        { label: "BMI", renderCell: (item) => item.bmi},
        { label: "Zip Code", renderCell: (item) => item.zipCode},
        { label: "Image", renderCell: (item) => (<img src={item.imageURL} width={100} height={60} alt="lung xray"/>),},
        { label: "Patient Details", renderCell: (item) => (<span className="material-symbols-rounded" onClick={() => handleDetails(item.patientId)}>patient_list
                    <a href={`/Details/${item.patientId}`} className="link"> </a></span>),}
    ];

    return <CompactTable columns={COLUMNS} data={data} theme={theme}/>;
};

export default TableExam;
