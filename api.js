import axios from 'axios';

const API_URL = 'http://localhost:5000/api/leaderboard';

export const fetchLeaderboard = () => axios.get(API_URL);
export const addUser = (userData) => axios.post(`${API_URL}/add`, userData);