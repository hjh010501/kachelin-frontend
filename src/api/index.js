import axios from "axios";

const api = axios.create({
    baseURL: 'https://kachelin-backend.now.sh/api/',
    headers: {
        Authorization: "JWT " + localStorage.getItem("access_koten")
    }
});

const api_no_auth = axios.create({
    baseURL: 'https://kachelin-backend.now.sh/api/'
});

export {
    api,
    api_no_auth
}