const repos = require("../repositories");

class UserService {

    async saveNewUser(newUser) {
        return await repos.UserRepo.saveNewUser(newUser);
    }

    async getUserByUsrname(usrname) {
        return await repos.UserRepo.getUserByUsrname(usrname);
    }

    async updateUserByUsrname(usrname, key, newValue) {
        return await repos.UserRepo.updateUserByUsrname(usrname, key, newValue);
    }
}

const userService = new UserService();

module.exports = userService;