import React, { useState } from 'react';
import axios from 'axios';
import { calculateResult } from '../utils/calculateResult';
import './Admin.css';

const Admin = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numbers1, setNumbers1] = useState('');
  const [numbers2, setNumbers2] = useState('');
  const [results, setResults] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedNumbers = [
        numbers1.split(',').map(Number),
        numbers2.split(',').map(Number),
      ];

      const calculatedResult = calculateResult(formattedNumbers);

      if (isNaN(calculatedResult)) {
        alert('Invalid numbers. Please check your input.');
        return;
      }

      setResults(calculatedResult);

      await axios.post('http://localhost:4000/api/data/add', {
        startDate,
        endDate,
        numbers: formattedNumbers,
        results: [Number(calculatedResult)],
      });

      alert('Data added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding data: ' + error.message);
    }
  };

  return (
    <div className='admin-panel-ui'>
      <h1 className='admin-panel-heading'>Admin Panel - Add Data</h1>
      <form onSubmit={handleSubmit}>
        <label className='admin-panal-container'>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

        <label className='admin-panal-container'>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

        <label className='admin-panal-container'>First Numbers (Comma-separated):</label>
        <input type="text" value={numbers1} onChange={(e) => setNumbers1(e.target.value)} required />

        <label className='admin-panal-container'>Second Numbers (Comma-separated):</label>
        <input type="text" value={numbers2} onChange={(e) => setNumbers2(e.target.value)} required />

        <label className='admin-panal-container'>Results (Auto-generated):</label>
        <input type="text" value={results} readOnly />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
