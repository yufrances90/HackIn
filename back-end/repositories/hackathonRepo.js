const utils = require("../utils");

class HackathonRepo {
    
    async saveNewHackathon(newHackathon) {

        const res = await utils.addHackathon(newHackathon);

        return res;
    }
}

const hackathonRepo = new HackathonRepo();

module.exports = hackathonRepo;