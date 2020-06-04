import axios from "axios";

const api = axios.create({
    baseURL: 'https://kachelin-backend.now.sh/api/',
});

const api_no_auth = axios.create({
    baseURL: 'https://kachelin-backend.now.sh/api/'
});

export {
    api,
    api_no_auth
}