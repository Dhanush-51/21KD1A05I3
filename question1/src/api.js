import axios from 'axios';

const API_URL = 'http://your-backend-api-url'; // Replace with your actual backend API URL

export const fetchProducts = async (filters, sort, page) => {
  const response = await axios.get(`${API_URL}/products`, {
    params: { ...filters, sort, page },
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
