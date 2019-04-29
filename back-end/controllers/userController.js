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

        try {

            const { response, email } = await services.UserService.admitUser(
                userId, 
                hackathonId, 
                acceptedStatus
            );

            const { name } = await services.HackathonService.getHackathonById(hackathonId);

            services.UtilService.sendEmail(
                `Congratulation! you have been accepted to ${name}!`,
                "test@gmail.com",
                email,
                `Acceptance to ${name}`
            );

            return response;
        } catch(err) {
            console.error(err);
        }
    }
}

const userController = new UserController();

module.exports = userController;