import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const DATA_FILE = './data.json';

// Read Data
app.get('/api/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// Add Data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  const currentData = JSON.parse(fs.readFileSync(DATA_FILE));
  currentData.push(newData);

  fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));
  res.json({ message: 'Data added successfully!' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
