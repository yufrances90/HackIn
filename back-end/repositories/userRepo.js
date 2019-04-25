const utils = require("../utils");

class UserRepo {

    async saveNewUser(newUser) {
        return await utils.addUser(newUser);
    }

    async getUserByUsrname(usrname) {
        return await utils.getUsers("usrname", "==", usrname);
    }

    async updateUserByUsrname(usrname, key, newValue) {
        return await utils.updateUserByUsrname(usrname, key, newValue);
    }
}

const userRepo = new UserRepo();

module.exports = userRepo;