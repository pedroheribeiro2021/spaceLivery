import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterAddress } from "./pages/registerAddress";
import { EditAddress } from "./pages/editAddress";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterAddress />} />
        <Route path="/edit" element={<EditAddress />} />
      </Routes>
    </Router>
  );
};

export default App;
