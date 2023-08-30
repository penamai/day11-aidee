import axios from 'axios';

const api = axios.create({
    baseURL: 'https://64edd9911f8721827141e2e4.mockapi.io/'
})

export default api;