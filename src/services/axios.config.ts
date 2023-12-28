import axios from "axios";
import { parseCookies } from "nookies";

const { "webschool.token": token } = parseCookies();

export const api = axios.create({
    baseURL: "http://localhost:2206/api"
});

api.interceptors.request.use(config => {
    //console.log(config);
    
    return Promise.resolve(config);
});


if(token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`
}

