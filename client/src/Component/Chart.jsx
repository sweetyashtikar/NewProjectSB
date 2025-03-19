import React from 'react';
import '../style/Chart.css';

const generateRandomNumber = () => {
  const random = Math.floor(Math.random() * 100);
  return random > 95 ? '**' : random; // 5% chance to show "**"
};

const generateWeeklyData = () => {
  const data = [];
  const startDate = new Date('2012-01-01');
  const endDate = new Date('2050-12-31');
  const daysPerWeek = 7;

  while (startDate <= endDate) {
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + daysPerWeek - 1);
    const dateRange = `${startDate.toLocaleDateString()} to ${nextDate.toLocaleDateString()}`;

    data.push({
      dateRange,
      Mon: generateRandomNumber(),
      Tue: generateRandomNumber(),
      Wed: generateRandomNumber(),
      Thu: generateRandomNumber(),
      Fri: generateRandomNumber(),
      Sat: generateRandomNumber(),
    });

    startDate.setDate(startDate.getDate() + daysPerWeek);
  }
  return data;
};

const data = generateWeeklyData();

const Chart = () => {
  const isSpecial = (value) => value === 99 || value === "**";

  const findMatch = () => {
    for (let i = 0; i < data.length - 5; i++) {
      if (data[i].Mon === 16) {
        console.log(`Found 16 on Week ${i + 1}`);

        // Start checking matches from row 2 to row 5
        for (let j = 1; j <= 4; j++) {
          if (data[i + j].Sat === data[i + 5].Sat) {
            console.log(`Match found at Week ${i + 5 + 1} - Breaking the loop`);
            return { weekIndex: i + 5, column: 'Sat' }; // Return matched week and column
          }
        }
      }
    }
    return null; // Return null if no match is found
  };

  const match = findMatch();

  return (
    <div>
      <h1>Weekly Number Chart (2012 - 2050)</h1>
      {match ? (
        <p>Match Found at Week {match.weekIndex + 1}, Column: {match.column}</p>
      ) : (
        <p>No Match Found</p>
      )}
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index === match?.weekIndex ? 'highlight-match' : ''}>
              <td>{row.dateRange}</td>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <td
                  key={day}
                  className={`${isSpecial(row[day]) ? 'highlight' : ''} ${
                    index === match?.weekIndex && day === match?.column ? 'highlight-match-column' : ''
                  }`}
                >
                  {row[day]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
