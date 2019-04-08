import axios from 'axios';

import config from '../config/config.json';

const { host, port } = config.server;
const baseURL = `http://${host}:${port}`;

const instance = axios.create({
    baseURL,
    timeout: 1000
});

export const testConnection = async () => {

    const response = await instance.get("/");
    
    console.log(response);
}

