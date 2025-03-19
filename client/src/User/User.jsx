import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/WeeklyTable.css';

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/data')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Weekly Table (User View)</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            {data.map((item, index) => (
              <th key={index}>{item.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(3)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex === 1 ? '31/12/2012 to 5/01/2013' : ''}</td>
              {data.map((item, dayIndex) => (
                <td key={`${rowIndex}-${dayIndex}`}>
                  {item.numbers[rowIndex]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Result</td>
            {data.map((item, index) => (
              <td key={`result-${index}`} className="result">{item.result}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
