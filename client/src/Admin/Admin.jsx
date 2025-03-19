import React, { useState } from 'react';
import { addData } from '../api';

const Admin = () => {
  const [week, setWeek] = useState('');
  const [numbers, setNumbers] = useState('');
  const [results, setResults] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedNumbers = numbers.split(';').map(row => row.split(',').map(Number));
      const formattedResults = results.split(',').map(Number);
      await addData({ week, numbers: formattedNumbers, results: formattedResults });
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
        <label>Week:</label>
        <input type="text" value={week} onChange={(e) => setWeek(e.target.value)} required />

        <label>Numbers (Format: 1,2,3;4,5,6):</label>
        <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} required />

        <label>Results (Comma-separated):</label>
        <input type="text" value={results} onChange={(e) => setResults(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;