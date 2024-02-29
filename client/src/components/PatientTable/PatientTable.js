import * as React from "react";
import { test_data } from "../../TestData/TestData";
import { useTheme } from "@table-library/react-table-library/theme";

import { useSort, HeaderCellSort } from "@table-library/react-table-library/sort";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useRowSelect, HeaderCellSelect, CellSelect, SelectClickTypes, SelectTypes } from "@table-library/react-table-library/select";
import { useParams } from "react-router-dom";

const PatientTable = () => {

    const { patientId } = useParams();


    const patientCases = test_data.filter(item => item.patientId === patientId);

    const data = { nodes: patientCases }

    const theme = useTheme({
        HeaderRow: `
        background-color: #eaf5fd;
      `,
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
        }
      `,
    });

    const select = useRowSelect(data, {}, {});


    const COLUMNS = [
        { label: 'Exam ID', renderCell: (item) => item.examId },
        { label: 'Patient ID', renderCell: (item) => item.patientId },
        { label: 'Age', renderCell: (item) => item.age },
        { label: 'Sex', renderCell: (item) => item.sex },
        { label: 'BMI', renderCell: (item) => item.bmi },
        { label: 'Zip Code', renderCell: (item) => item.zipCode },
        { label: 'Image', renderCell: (item) => <img src={item.imageURL} width={100} height={60} alt="lung xray" /> },

    ];

    return <CompactTable columns={COLUMNS} data={data} theme={theme} /*select={select}*/ />
}

export default PatientTable;
