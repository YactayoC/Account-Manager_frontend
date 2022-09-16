import axios from 'axios';

const accountManagerAPI = axios.create({
  // baseURL: `${process.env.REACT_APP_API_URL}`,
  baseURL: 'http://127.0.0.1:8000/api',
});

export default accountManagerAPI;
