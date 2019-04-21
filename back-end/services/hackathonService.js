const repos = require("../repositories");

class HackathonService {

    async saveNewHackathon(newHackathon) {
        
        const res = await repos.HackathonRepo.saveNewHackathon(newHackathon);

        return res;
    }

    async getAllHackathons() {

        const res = await repos.HackathonRepo.getAllHackathons();

        return res;
    }
}

const hackathonService = new HackathonService();

module.exports = hackathonService;