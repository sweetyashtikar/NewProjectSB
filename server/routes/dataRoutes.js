import express from 'express';
import { getData, addData } from '../controllers/dataController.js';

const router = express.Router();

router.get('/', getData);
router.post('/', addData);

export default router;