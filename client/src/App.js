import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
// import { useApi } from './hooks/use-api';
import Admin from "./pages/Admin/Admin";


// comment to change
import './App.css';

import { useApi } from './hooks/use-api';


function App() {
  // const { response } = useApi();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
