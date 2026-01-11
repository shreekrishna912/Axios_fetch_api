import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get('/users/$(id)');

export const fetchWithErrorHandling = async (axiosCall) => {
    try {
        const response = await axiosCall;
        return { data: response.data, error: null };
    }
    catch (error) {
        return {
            data: null,
            error: error.response?.data?.message || error.message || 'Something went wrong',
        };
    }
};