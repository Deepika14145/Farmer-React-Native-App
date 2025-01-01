import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    adharNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/submit-form', formData);
      console.log(response.data); // Success message from the backend
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="App">
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <input
          type="text"
          name="adharNumber"
          value={formData.adharNumber}
          onChange={handleChange}
          placeholder="Aadhar Number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
