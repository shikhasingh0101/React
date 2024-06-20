import React, { useState } from "react";
import "./App.css";
import Pg1 from "./Pg1.form";
import Pg2 from "./Pg2.form";
import Pg3 from "./Pg3.form";

function App() {
  const [pgNo, setPgNo] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
  });

  let nextPage = () => setPgNo((prev) => Math.min(prev + 1, 4));
  let prevPage = () => setPgNo((prev) => Math.max(prev - 1, 1));

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <center className="mt-4">
        <h3>Multi-step Form</h3>
      </center>
      <div className="form-container">
        {pgNo < 4 && <p>Page {pgNo} / 3</p>}
        {pgNo === 1 && <Pg1 formData={formData} handleChange={handleChange} />}
        {pgNo === 2 && <Pg2 formData={formData} handleChange={handleChange} />}
        {pgNo === 3 && <Pg3 formData={formData} handleChange={handleChange} />}
        {pgNo === 4 && <h4>Thank you for your response!</h4>}
        {pgNo < 4 && (
          <center>
            {pgNo > 1 && (
              <button className="btn btn-primary" type="button" onClick={prevPage}>
                Back
              </button>
            )}
            {pgNo < 3 && (
              <button className="btn btn-primary mx-4" type="button" onClick={nextPage}>
                Next
              </button>
            )}
            {pgNo === 3 && (
              <button className="btn btn-success mx-4" type="button" onClick={nextPage}>
                Submit
              </button>
            )}
          </center>
        )}
      </div>
    </div>
  );
}

export default App;