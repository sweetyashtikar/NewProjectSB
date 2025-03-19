import axios from 'axios';

const API_URL = 'http://localhost:4000/api/data';

export const getData = async () => axios.get(API_URL);
export const addData = async (data) => axios.post(API_URL, data);