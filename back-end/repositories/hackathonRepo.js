const utils = require("../utils");

class HackathonRepo {
    
    async saveNewHackathon(newHackathon) {

        const res = await utils.addHackathon(newHackathon);

        return res;
    }

    async getAllHackathons() {

        const res = await utils.getAllHackathons();

        return res;
    }
}

const hackathonRepo = new HackathonRepo();

module.exports = hackathonRepo;