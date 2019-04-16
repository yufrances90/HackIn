const repos = require("../repositories");

class HackathonService {

    async saveNewHackathon(newHackathon) {
        
        const res = await repos.HackathonRepo.saveNewHackathon(newHackathon);

        return res;
    }
}

const hackathonService = new HackathonService();

module.exports = hackathonService;