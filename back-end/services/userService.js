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

    async updateUserByUsrname(userId, userByHackathon, hackathonId) {

        const { userType } = userByHackathon;

        const updatedUserByHackathon = {
            ...userByHackathon,
            isHacker: (userType === "hacker")? true : false,
            isMentor: (userType === "mentor")? true : false,
            isVolunteer: (userType === "volunteer")? true : false,
            isAdmitted: false
        };

        return await repos.UserRepo.updateUserByUsrname(
            userId, 
            updatedUserByHackathon, 
            hackathonId
        );
    }

    async getUsersByHackathon(hackathonId) {
        return await repos.UserRepo.getUsersByHackathon(hackathonId);
    }

    async admitUser(userId, hackathonId, acceptedStatus) {
        return await repos.UserRepo.admitUser(
            userId, 
            hackathonId, 
            acceptedStatus
        );
    }
}

const userService = new UserService();

module.exports = userService;