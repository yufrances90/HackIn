const services = require("../services");

class HackathonController {

    async saveNewHackathon(newHackathon) {

        const res = await services.HackathonService.saveNewHackathon(newHackathon);

        return res;
    }

    async getAllHackathons() {

        const res = await services.HackathonService.getAllHackathons();

        return res;
    }
}

const hackathonController = new HackathonController();

module.exports = hackathonController;