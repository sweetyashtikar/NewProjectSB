import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    day: '',
    numbers: [0, 0, 0],
    result: 0,
  });

  const handleChange = (e, index = null) => {
    if (index !== null) {
      const updatedNumbers = [...formData.numbers];
      updatedNumbers[index] = Number(e.target.value);
      setFormData({ ...formData, numbers: updatedNumbers });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:4000/api/data', formData);
      alert('Data added successfully!');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel - Add Data</h1>
      <label>Day: </label>
      <input name="day" onChange={handleChange} />
      
      {[0, 1, 2].map((index) => (
        <div key={index}>
          <label>Number {index + 1}: </label>
          <input type="number" onChange={(e) => handleChange(e, index)} />
        </div>
      ))}

      <label>Result: </label>
      <input name="result" type="number" onChange={handleChange} />
      
      <button onClick={handleSubmit}>Add Data</button>
    </div>
  );
};

export default Admin;
