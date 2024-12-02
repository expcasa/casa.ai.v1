import "./App.css";
import Home from "./Home/home";
import Criteria from "./CriteriaPage/Criteria";
import Comparison from "./Comparison/Comparison";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Criteria" element={<Criteria/>}/>
          <Route path="/Comparison" element={<Comparison/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;