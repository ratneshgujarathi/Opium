
import axios from "axios";
import { apiPath } from "../constants/global-constants";

const request = axios.create({
    baseURL: apiPath,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
});


request.interceptors.request.use((config)=>{
    if (localStorage.getItem("lKey")) {
        config.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem("lKey");
    }
    config.params = {
        ...config.params
    }
    return config
})

request.interceptors.request.use((response)=>{
    return response
})

export default request