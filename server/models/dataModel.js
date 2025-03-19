import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  week: String,
  numbers: [[Number]],
  results: [Number],
});

export default mongoose.model('Data', DataSchema);