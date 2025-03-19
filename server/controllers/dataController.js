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

// Add data
export const addData = async (req, res) => {
  try {
    const { startDate, endDate, numbers, results } = req.body;

    // Validate start and end dates
    if (new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({ error: 'End date must be greater than or equal to start date.' });
    }

    const newData = new Data({ startDate, endDate, numbers, results });
    await newData.save();
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
