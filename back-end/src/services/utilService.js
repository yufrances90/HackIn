const axios = require("axios");

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
            throw err;
        }
    }

    async sendEmail(
        text, 
        fromEmail, 
        toEmail, 
        subject,
        attachments) {

        return await utils.sendEmail(
            text, 
            fromEmail, 
            toEmail, 
            subject, 
            attachments
        );
    }

    async generateBarcodePNG(text) {
        return await utils.generateBarcodePNG(text);
    }
}

const utilService = new UtilService();

module.exports = utilService;