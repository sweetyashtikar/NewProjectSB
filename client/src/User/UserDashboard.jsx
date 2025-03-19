import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/WeeklyTable.css';

const UserDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Numbers</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{`${item.startDate} to ${item.endDate}`}</td>
              <td>
                {item.numbers.map((row, i) => (
                  <div key={i}>{row.join(' ')}</div>
                ))}
              </td>
              <td>{item.results.join(' ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;