import React, { useState } from 'react';
import './Admin.css';
import adminbg from "../assets/images/adminbg.jfif";

function App() {
  const [formData, setFormData] = useState({
    age: '',
    symptoms: '',
    triageVitals: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const symptomOptions = [
    'Fever',
    'Cough',
    'Headache',
    // Add more symptoms
  ];

  const triageVitalsOptions = [
    'Normal',
    'High',
    'Low',
    // Add more triage vitals
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can handle form submission logic here if needed.
  };

  return (
    <div className="registration-container">
      <div className="left-panel">
      <img src={adminbg} alt="Registration" />
      </div>
      <div className="right-panel">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="symptoms">Symptoms:</label>
            <select
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
            >
              <option value="">Select Symptoms</option>
              {symptomOptions.map((symptom, index) => (
                <option key={index} value={symptom}>
                  {symptom}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="triageVitals">Triage Vitals:</label>
            <select
              id="triageVitals"
              name="triageVitals"
              value={formData.triageVitals}
              onChange={handleInputChange}
            >
              <option value="">Select Triage Vitals</option>
              {triageVitalsOptions.map((vital, index) => (
                <option key={index} value={vital}>
                  {vital}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" style={{ backgroundColor: '#97D5FF' }}>
            Submit
          </button>
        </form>
        {submitted && (
          <div className="output">
          <h3>Output:</h3>
    <p>ESI index: 2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
