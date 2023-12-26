import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
