import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import NewExam from "./pages/NewExam/NewExam";
import PatientTable from "./components/PatientTable/PatientTable";

function App() {
  // Comment to change
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route
              path="/Details/:patientId"
              element={<PatientTable />}
            ></Route>
            <Route path="/newExam" element={<NewExam />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
