const { googleMapConfig } = require('../config');

const getApiKey = () => {
    return googleMapConfig.apiKey;
}

module.exports = {
    getApiKey
}