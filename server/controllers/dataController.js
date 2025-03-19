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
    const newData = new Data(req.body);
    await newData.save();
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};