import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "../../components/ExamForm/ExamForm.css";


const ExamUpdate = () => {



    const [examId, setExamId] = useState();
    const [age, setAge] = useState();
    const [bmi, setBmi] = useState();
    const [imageURL, setImageURL] = useState("");
    const [keyFindings, setKeyFindings] = useState("");
    const [brixiaScore, setBrixiaScore] = useState();
    const [zipCode, setZipCode] = useState();
    const [sex, setSex] = useState();
    const [error, setError] = useState(null);
    const { patientId } = useParams();

    function handleReset() {
        setExamId("");
        setAge("");
        setBmi("");
        setImageURL("");
        setKeyFindings("");
        setBrixiaScore("");
        setZipCode("");
        setSex("");
        setError(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();



        const exam = {
            examId, patientId, age, bmi, imageURL, keyFindings, brixiaScore, zipCode, sex

        };

        /*for (const field in exam) {
            if (exam[field] === "") {
                exam[field].__delete__(field);
            }

        }*/

        //fixed this call to api
        const response = await fetch(`http://localhost:4000/api/index/${patientId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(exam),
        });

        const json = await response.json();
        console.log(json);

        if (response.ok) {
            handleReset();
            console.log("Exam added successfully", json);
            alert("Exam updated successfully!")
        } else {
            setError(json.error);
        }



    }

    return (
        <form className="create" onSubmit={handleSubmit} onReset={handleReset}>
            <h2>Update Exam</h2>
            <label>Exam ID:</label>
            <input type="text" value={examId} onChange={(e) => setExamId(e.target.value)} />
            <br/>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <br/>
            <label>Sex:</label>
            <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            <br/>
            <label>BMI:</label>
            <input type="number" value={bmi} onChange={(e) => setBmi(e.target.value)} />
            <br/>
            <label>Zip Code:</label>
            <input type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            <br/>
            <label>Image URL:</label>
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            <br/>
            <label>Key Findings:</label>
            <input type="text" value={keyFindings} onChange={(e) => setKeyFindings(e.target.value)} />
            <br/>
            <label>Brixia Score:</label>
            <input type="number" value={brixiaScore} onChange={(e) => setBrixiaScore(e.target.value)} />
            <br/>
            <button type="submit">Update Exam</button>
            {error && <div className="error">{error}</div>}
            <button type="reset">Reset</button>
            <br/>
            <br/>
            <a href="/admin">Back to Admin Page</a>
        </form>
    );
}

export default ExamUpdate;