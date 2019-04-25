const services = require("../services");

class UserController {

    async saveNewUser(data) {
        return await services.UserService.saveNewUser(data);
    }

    async getUserByUsrname(usrname) {
        return await services.UserService.getUserByUsrname(usrname);
    }

    async updateUserByUsrname(usrname, key, newValue) {
        return await services.UserService.updateUserByUsrname(usrname, key, newValue);
    }
}

const userController = new UserController();

module.exports = userController;