const services = require("../services");

class UserController {

    async saveNewUser(data) {
        return await services.UserService.saveNewUser(data);
    }

    async getUserByUsrname(usrname) {
        return await services.UserService.getUserByUsrname(usrname);
    }

    async updateUserByUsrname(userId, userByHackathon, hackathonId) {
        return await services.UserService.updateUserByUsrname(
            userId, 
            userByHackathon, 
            hackathonId
        );
    }

    async getUsersByHackathon(hackathonId) {
        return await services.UserService.getUsersByHackathon(hackathonId);
    }

    async admitUser(userId, hackathonId, acceptedStatus) {
        return await services.UserService.admitUser(
            userId, 
            hackathonId, 
            acceptedStatus
        );
    }
}

const userController = new UserController();

module.exports = userController;