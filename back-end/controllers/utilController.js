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
}

const utilController = new UtilController();

module.exports = utilController;