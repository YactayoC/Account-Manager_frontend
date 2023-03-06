import axios from 'axios';

const accountManagerAPI = axios.create({
  baseURL: 'account-managerbackend-production.up.railway.app',
});

export default accountManagerAPI;
