import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  numbers: [[Number]],
  results: [Number],
});

export default mongoose.model('Data', DataSchema);