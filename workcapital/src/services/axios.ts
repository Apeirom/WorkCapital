import axios from 'axios';

export function getApi() {

    const api = axios.create({
        baseURL: 'https://workcapital-backend.onrender.com/api/'
    });

    return api;
}
