import axios from 'axios';

const SERVER_PORT = process.env.SERVER_PORT || 8888
const SERVER_HOST = process.env.SERVER_HOST || 'http://localhost'
const URL = process.env.REACT_APP_API_URL || `${SERVER_HOST}:${SERVER_PORT} `
console.log(test)
console.log(SERVER_PORT)
console.log(SERVER_HOST)

const api = axios.create({
    baseURL: `${URL}`
})

export default api;