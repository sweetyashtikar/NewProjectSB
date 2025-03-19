import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>User Dashboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Day</th>
            <th>Numbers</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.numbers.join(', ')}</td>
              <td>{String(item.open).padStart(2, '0')}</td>
              <td>{String(item.close).padStart(2, '0')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
