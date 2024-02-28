import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
// import { useApi } from './hooks/use-api';
import Admin from "./pages/Admin/Admin";
import Details from "./pages/Details/Details";
import NewExam from "./pages/NewExam/NewExam";

// comment to change
import './App.css';

import { useApi } from './hooks/use-api';
import PatientTable from "./components/PatientTable/PatientTable";


function App() {
  // const { response } = useApi();

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
