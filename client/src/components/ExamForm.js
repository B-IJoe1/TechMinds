import {useState} from "react";



const ExamForm = () => {

    const [examId, setExamId] = useState("");
    const [patientId, setPatientId] = useState("");
    const [age, setAge] = useState("");
    const [bmi, setBmi] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [keyFindings, setKeyFindings] = useState("");
    const [brixiaScore, setBrixiaScore] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [sex, setSex] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exam = {
            examId,
            patientId,
            age,
            bmi,
            imageURL,
            keyFindings,
            brixiaScore,
            zipCode,
            sex

        };

        const response = await fetch("http://localhost:4000/api/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(exam),
        });

        const json = await response.json();
        console.log(json);

        if (response.ok) {
            setExamId("");
            setPatientId("");
            setAge("");
            setBmi("");
            setImageURL("");
            setKeyFindings("");
            setBrixiaScore("");
            setZipCode("");
            setSex("");
            setError(null);
            console.log("Exam added successfully", json);
        } else {
            setError(json.error);
        }



    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add a New Exam</h2>
            <label>Exam ID:</label>
            <input type="text" required value={examId} onChange={(e) => setExamId(e.target.value)} />
            <label>Patient ID:</label>
            <input type="text" required value={patientId} onChange={(e) => setPatientId(e.target.value)} />
            <label>Age:</label>
            <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} />
            <label>Sex:</label>
            <input type="text" required value={sex} onChange={(e) => setSex(e.target.value)} />
            <label>BMI:</label>
            <input type="number" required value={bmi} onChange={(e) => setBmi(e.target.value)} />
            <label>Zip Code:</label>
            <input type="number" required value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            <label>Image URL:</label>
            <input type="text" required value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            <label>Key Findings:</label>
            <input type="text" required value={keyFindings} onChange={(e) => setKeyFindings(e.target.value)} />
            <label>Brixia Score:</label>
            <input type="number" required value={brixiaScore} onChange={(e) => setBrixiaScore(e.target.value)} />
            <button type="submit">Add Exam</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ExamForm;