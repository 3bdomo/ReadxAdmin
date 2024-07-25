import axios from 'axios';

const baseURL = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true, // Ensure credentials are included in requests
  headers: {
    "Content-Type": "application/json",
  },
});
export default baseURL;
