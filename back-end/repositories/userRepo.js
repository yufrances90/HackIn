const utils = require("../utils");

class UserRepo {

    async saveNewUser(newUser) {
        return await utils.addUser(newUser);
    }

    async getUserByUsrname(usrname) {
        return await utils.getUsers("usrname", "==", usrname);
    }

    async updateUserByUsrname(userId, userByHackathon, hackathonId) {
        return await utils.updateUserByUsrname(
            userId, 
            userByHackathon, 
            hackathonId
        );
    }

    async getUsersByHackathon(hackathonId) {
        return await utils.getUsersByHackathonId(hackathonId);
    }

    async admitUser(userId, hackathonId, acceptedStatus) {
        return await utils.admitUser(userId, hackathonId, acceptedStatus);
    }
}

const userRepo = new UserRepo();

module.exports = userRepo;