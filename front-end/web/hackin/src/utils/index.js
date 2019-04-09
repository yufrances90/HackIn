import ApiClient from './api';

import config from '../config/config.json';

const { host, port } = config.server;
const baseURL = `http://${host}:${port}`;

const apiClient = new ApiClient(baseURL);

export const getClient = () => {
    return apiClient;
}