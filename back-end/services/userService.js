const repos = require("../repositories");

class UserService {

    async saveNewUser(data) {

        const { newUser, hackathonId } = data;
        
        const userByHackathon = newUser.hackathons[hackathonId];

        const { userType } = userByHackathon;

        const user = {
            ...newUser,
            hackathons: {
                ...newUser.hackathons,
                [hackathonId]: {
                    ...userByHackathon,
                    isHacker: (userType === "hacker")? true : false,
                    isMentor: (userType === "mentor")? true : false,
                    isVolunteer: (userType === "volunteer")? true : false,
                    isAdmitted: false
                }
            }
        }

        return await repos.UserRepo.saveNewUser(user);
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