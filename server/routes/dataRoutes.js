import express from 'express';
import { addData, getData } from '../controllers/dataController.js';

const router = express.Router();

router.get('/get', getData);
router.post('/add', addData);

export default router;
