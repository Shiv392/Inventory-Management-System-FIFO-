import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8001',
    headers: {
        "Content-Type": 'application/json',
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
    }
})

export default api;