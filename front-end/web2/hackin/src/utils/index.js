import ApiClient from './api';
import { EventBus } from './eventBus';
import Store from './store';

import config from '../config/config.json';
import googleConfig from '../config/google.json';

const getClient = () => {

    const { host, port } = config.server;
    const baseURL = `http://${host}:${port}`;

    return new ApiClient(baseURL);
}

const getGoogleApiKey = () => {
    return googleConfig.apiKey;
}

export default {
    Client: getClient(),
    EventBus,
    Store,
    GoogleApiKey: getGoogleApiKey()
}