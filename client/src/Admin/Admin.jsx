import React, { useState } from 'react';
import { addData } from '../api';

const Admin = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numbers, setNumbers] = useState('');
  const [results, setResults] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedNumbers = numbers.split(';').map(row => row.split(',').map(Number));
      const formattedResults = results.split(',').map(Number);
      await addData({ startDate, endDate, numbers: formattedNumbers, results: formattedResults });
      alert('Data added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding data');
    }
  };

  return (
    <div>
      <h1>Admin Panel - Add Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Week (Select Start Date):</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label>To (Select End Date):</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <label>Numbers (Format: 1,2,3;4,5,6):</label>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          required
        />

        <label>Results (Comma-separated):</label>
        <input
          type="text"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
