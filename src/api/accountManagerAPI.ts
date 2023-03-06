import axios from 'axios';

const accountManagerAPI = axios.create({
  baseURL: 'https://account-managerbackend-production.up.railway.app/api',
});

export default accountManagerAPI;
