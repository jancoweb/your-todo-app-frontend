import axios from 'axios';

export default axios.create({
  baseURL: 'https://your-to-do-app.herokuapp.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});