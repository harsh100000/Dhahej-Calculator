import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DowryCalculator from "./components/DowryCalculator";
import Result from "./components/Result";


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DowryCalculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </Router>
  );
};

export default App;
