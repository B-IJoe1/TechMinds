import React from "react";

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>
            <p>This page is used to add, delete, or update exam records. You can also find a specific exam based on a number of attributes.</p>

            <div className="buttons">
                <button>Add New Exam</button>
                <br/>
                <button>Update Exam</button>
                <button>Delete Exam</button>
                <br/><br/>Find Exam by: <select>
                    <option>Patient ID</option>
                    <option>Exam ID</option>
                    <option>Patient Age</option>
                    <option>Patient Sex</option>
                    <option>Zip Code</option>
            </select>
                <input/><button>Find Exam</button>

            </div>

        </div>
);
}

export default Admin;