import axios from 'axios';
import raven from 'raven-js';

const getClient = (baseURL = null) => {

    const options = {
        baseURL
    }

    const client = axios.create(options);

    client.interceptors.request.use(
        requestConfig => requestConfig,
        (requestError) => {
            raven.captureException(requestError);
      
            return Promise.reject(requestError);
        }
    );

    client.interceptors.response.use(
        response => response,
        (error) => {
          if (error.response.status >= 500) {
            raven.captureException(error);
          }
    
          return Promise.reject(error);
        },
    );

    return client;
}

export default class ApiClient {

    constructor(baseUrl = null) {
        this.client = getClient(baseUrl);
    }

    get(url, conf = {}) {
        return this.client.get(url, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    delete(url, conf = {}) {
        return this.client.delete(url, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    head(url, conf = {}) {
        return this.client.head(url, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    options(url, conf = {}) {
        return this.client.options(url, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    post(url, data = {}, conf = {}) {
        return this.client.post(url, data, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    put(url, data = {}, conf = {}) {
        return this.client.put(url, data, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }

    patch(url, data = {}, conf = {}) {
        return this.client.patch(url, data, conf)
          .then(response => Promise.resolve(response))
          .catch(error => Promise.reject(error));
    }
}
