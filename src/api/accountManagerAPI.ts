import axios from 'axios';
export const { REACT_APP_API_URL } = process.env
const API_URL = REACT_APP_API_URL ?? ""
console.log(API_URL)

const accountManagerAPI = axios.create({
  baseURL: 'https://account-managerbackend-production.up.railway.app/api',
});

export default accountManagerAPI;
