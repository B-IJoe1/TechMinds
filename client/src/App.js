import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
// import { useApi } from './hooks/use-api';
// comment to change
import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
