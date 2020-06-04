import axios from "axios";

const api = axios.create({
    baseURL: 'https://kachelin-backend.now.sh/api/',
    headers: {
        Authorization: "JWT " + localStorage.getItem("access_koten")
    }
});

export default api;