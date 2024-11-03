import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/journal', // Change the baseURL to match your backend's address
});

export default API;
