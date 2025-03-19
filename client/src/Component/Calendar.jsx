import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Calender.css';

const Calendar = ({ searchNumber }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/calendar')
      .then((response) => {
        console.log("Data Received:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const checkContinuity = (day) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.[day] === searchNumber) {
        count++;
        if (count === 6) return true;
      } else {
        count = 0;
      }
    }
    return false;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((week, index) => (
            <tr key={index}>
              <td>Week {index + 1}</td>
              {Object.keys(week).map((day) => (
                <td key={day} className={`${week[day] === searchNumber ? 'highlight' : ''}`}>
                  {week[day]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day =>
        checkContinuity(day) ? (
          <p key={day}>Number {searchNumber} appeared 6 times in {day}</p>
        ) : null
      )}
    </div>
  );
};

export default Calendar;
