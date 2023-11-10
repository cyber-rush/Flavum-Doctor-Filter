import axios from "axios";
import { getToken } from "../utils/HelperFunctions";

const BASE_URL = "http://localhost:3001/api/v1";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to set 'Authorization' header if token is available
api.interceptors.request.use((config) => {
  const token = getToken(); // Get the JWT token from storage or authentication state
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
