import axios from "axios";
import { environment } from "../constants/environment";

const configureAxios = () => {
  return axios.create({
    timeout: 32000,
    baseURL: environment.baseURL,
    headers: {
      "content-Type": "application/json",
    },
  });
};

export const axiosInstance = configureAxios();

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
    } catch (error) {}
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);
