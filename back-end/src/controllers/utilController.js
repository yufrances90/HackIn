const services = require("../services");

class UtilController {

    getGoogleMapApiKey() {
        return services.UtilService.getGoogleMapApiKey();
    }

    async getCoordinatesByAddress(address) {
        
        try {

            const res = await services.UtilService.getCoordinatesByAddress(address);

            return res;
        } catch(err) {
            throw err;
        }
    }

    async sendEmail(text, fromEmail, toEmail, subject) {
        return await services.UtilService.sendEmail(text, fromEmail, toEmail, subject);
    }

    async generateBarcodePNG(text) {
        return await services.UtilService.generateBarcodePNG(text);
    }
}

const utilController = new UtilController();

module.exports = utilController;