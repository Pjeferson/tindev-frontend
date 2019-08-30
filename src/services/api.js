import axios from 'axios';

require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3333'
});

export default api;