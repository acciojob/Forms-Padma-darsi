import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
        <h2>React Forms with Different Handling Methods</h2>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" id="form-link" style={{ margin: "0 10px" }}>Form (No Handling)</Link>
          <Link to="/ref" id="form-ref-link" style={{ margin: "0 10px" }}>Form with useRef</Link>
          <Link to="/state" id="form-state-link" style={{ margin: "0 10px" }}>Form with useState</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ref" element={<FormRef />} />
          <Route path="/state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

