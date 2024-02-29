import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components imports
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import NewExam from "./pages/NewExam/NewExam";
import PatientTable from "./components/PatientTable/PatientTable";
import ExamUpdate from "./pages/ExamUpdate/ExamUpdate";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/Details/:patientId" element={<PatientTable />}></Route>
            <Route path="/newExam" element={<NewExam />}></Route>
            <Route path="/updateExam/:patientId" element={<ExamUpdate />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
