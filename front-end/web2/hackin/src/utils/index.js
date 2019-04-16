import ApiClient from './api';
import { EventBus } from './eventBus';

import config from '../config/config.json';

const getClient = () => {

    const { host, port } = config.server;
    const baseURL = `http://${host}:${port}`;

    return new ApiClient(baseURL);
}

export default {
    Client: getClient(),
    EventBus
}