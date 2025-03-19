import Data from '../models/dataModel.js';

// Get all data
export const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add data with validation
export const addData = async (req, res) => {
  try {
    const { startDate, endDate, numbers, results } = req.body;

    if (!startDate || !endDate || new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({ error: 'Invalid start or end date' });
    }

    if (!Array.isArray(numbers) || numbers.length !== 2 || !numbers.every(arr => Array.isArray(arr) && arr.every(num => typeof num === 'number'))) {
      return res.status(400).json({ error: 'Invalid numbers format. Provide two arrays of numbers.' });
    }

    if (!Array.isArray(results) || results.length !== 1 || typeof results[0] !== 'number') {
      return res.status(400).json({ error: 'Invalid results format. Provide a single number in an array.' });
    }

    const newData = new Data({ startDate, endDate, numbers, results });
    await newData.save();
    res.json({ message: 'Data added successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
