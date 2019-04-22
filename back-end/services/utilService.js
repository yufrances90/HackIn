const utils = require("../utils");

class UtilService {

    getGoogleMapApiKey() {
        return utils.getApiKey();
    }

    async getCoordinatesByAddress(address) {

        const geocodeBaseUri = "https://maps.googleapis.com/maps/api/geocode";
        const format = "json";
        const key = utils.getApiKey();
        const encodedAddress = encodeURI(address);

        const url = `${geocodeBaseUri}/${format}?address=${encodedAddress}&key=${key}`;

        try {

            const response = await axios.get(url);
    
            return response.data;
        } catch(err) {
            throw err
        }
    }
}

const utilService = new UtilService();

module.exports = utilService;