import * as React from "react";
import {test_data} from "../../TestData/TestData";
import {useTheme} from "@table-library/react-table-library/theme";
import {CompactTable} from "@table-library/react-table-library/compact";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useEffect, useState} from "react";

const TableExam = () => {

    const [exams, setExams] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/index');
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setExams(json);
            }

        }
        fetchData();
    }, []);

    // const data = {nodes: test_data}
    const data = {nodes: exams}


        exams && exams.map((exam) => {
            console.log(exam);
            const examId = exam.examId;
            const patientId = exam.patientId;
        })



    const theme = useTheme({
        HeaderRow: `
        background-color: #eaf5fd;`,
        Row: `
        &:hover .td {
        border-top: 1px solid orange;
        border-bottom: 1px solid orange;            
        }
        
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        } `,
    });

    // const select = useRowSelect(data, {}, {});


    const COLUMNS = [
        {label: 'Exam ID', renderCell: (item) => item.examId},
        {label: 'Patient ID', renderCell: (item) => item.patientId},
        {label: 'Age', renderCell: (item) => item.age},
        {label: 'Sex', renderCell: (item) => item.sex},
        {label: 'BMI', renderCell: (item) => item.bmi},
        {label: 'Zip Code', renderCell: (item) => item.zipCode},
        {label: 'Image', renderCell: (item) => <img src={item.imageURL} width={100} height={60} alt="lung xray"/>},
        {label: ' ', renderCell: (item) => <button>Update</button>},
        {label: ' ', renderCell: (item) => <button>Delete</button>}
    ];

    return <CompactTable columns={COLUMNS} data={data} theme={theme} /*select={select}*/  />
}

export default TableExam;