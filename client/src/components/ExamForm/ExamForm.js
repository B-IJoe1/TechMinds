import {useState} from "react";


const ExamForm = () => {

    const [examId, setExamId] = useState("");
    const [patientId, setPatientId] = useState("");
    const [age, setAge] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [imageURL, setImageURL] = useState("");
    const [keyFindings, setKeyFindings] = useState("");
    const [brixiaScore, setBrixiaScore] = useState(0);
    const [zipCode, setZipCode] = useState(0);
    const [sex, setSex] = useState("");
    const [error, setError] = useState(null);

    function handleReset() {
        setExamId("");
        setPatientId("");
        setAge(0);
        setBmi(0);
        setImageURL("");
        setKeyFindings("");
        setBrixiaScore(0);
        setZipCode(0);
        setSex("");
        setError(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exam = {
            examId, patientId, age, bmi, imageURL, keyFindings, brixiaScore, zipCode, sex

        };


        const response = await fetch("http://localhost:4000/api/index/admin", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(exam),
        });

        const json = await response.json();
        console.log(json);

        if (response.ok) {
            handleReset();
            console.log("Exam added successfully", json);
            // dispatch({ type: "ADD_EXAM", payload: json });
        } else {
            setError(json.error);
        }


    }


    return (<form className="create" onSubmit={handleSubmit} onReset={handleReset}>
        <h2>Add a New Exam</h2>
        <label>Exam ID:</label>
        <input type="text" required value={examId} onChange={(e) => setExamId(e.target.value)}/>
        <br/>
        <label>Patient ID:</label>
        <input type="text" required value={patientId} onChange={(e) => setPatientId(e.target.value)}/>
        <br/>
        <label>Age:</label>
        <input type="number" required value={age} onChange={(e) => setAge(e.target.value)}/>
        <br/>
        <label>Sex:</label>
        <input type="text" required value={sex} onChange={(e) => setSex(e.target.value)}/>
        <br/>
        <label>BMI:</label>
        <input type="number" required value={bmi} onChange={(e) => setBmi(e.target.value)}/>
        <br/>
        <label>Zip Code:</label>
        <input type="number" required value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
        <br/>
        <label>Image URL:</label>
        <input type="text" required value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
        <br/>
        <label>Key Findings:</label>
        <input type="text" required value={keyFindings} onChange={(e) => setKeyFindings(e.target.value)}/>
        <br/>
        <label>Brixia Score:</label>
        <input type="number" required value={brixiaScore} onChange={(e) => setBrixiaScore(e.target.value)}/>
        <br/>

        <span className="material-symbols-rounded">person_add</span>
        <span className="material-symbols-rounded">note_add</span>
        <span className="material-symbols-rounded">post_add</span>

        <button type="submit">Add Exam</button>


        {error && <div className="error">{error}</div>}
        <button type="reset">Reset</button>
        <br/>
        <br/>
        <a href="/admin">Back to Admin Page</a>
    </form>)
}

export default ExamForm;