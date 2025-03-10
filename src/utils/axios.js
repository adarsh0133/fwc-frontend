import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://localhost:3030',
    // baseURL: 'https://fwc-backend-two.vercel.app',
    withCredentials: true,
});

export default instance;