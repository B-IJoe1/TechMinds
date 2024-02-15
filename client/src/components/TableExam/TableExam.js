import React from "react";
import {test_data} from "../../TestData/TestData";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from '@table-library/react-table-library'

const examData = test_data;

const TableExam = () => {

    const data = { nodes: examData}
    return (<Table data={data}>
            {(tableList) => <>
                <Header>
                    <HeaderRow>
                        <HeaderCell>Exam ID</HeaderCell>
                        <HeaderCell>Patient ID</HeaderCell>
                        <HeaderCell>Age</HeaderCell>
                        <HeaderCell>Sex</HeaderCell>
                        <HeaderCell>BMI</HeaderCell>
                        <HeaderCell>Zip Code</HeaderCell>
                        <HeaderCell>Image</HeaderCell>
                    </HeaderRow>
                </Header>

               { <Body>
                    {tableList.map((examData) => (<Row key={examData.id} item={examData}>
                            <Cell>{examData.id}</Cell>
                            <Cell>{examData.patientId}</Cell>
                            <Cell>{examData.age}</Cell>
                            <Cell>{examData.sex}</Cell>
                            <Cell>{examData.bmi}</Cell>
                            <Cell>{examData.zipCode}</Cell>
                        </Row>))}
                </Body>}
            </>}
        </Table>

    )
}

export default TableExam;