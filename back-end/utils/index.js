const {
    testFirebaseDB,
    getAllUsers,
    getAllHackathons,
    getUserById,
    getHackathonById,
    getUsers,
    getHackathons,
    addUser,
    addHackathon,
    deleteHackathon,
    deleteUser,
    getAllAccounts,
    getAccounts,
    getAccountById,
    addAccount,
    deleteAccount,
    updateUserByUsrname,
    getUsersByHackathonId,
    admitUser
} = require('./firebase');

const {
    getApiKey
} = require('./googleMap');

const { sendEmail } = require('./nodemailer');

module.exports = {
    testFirebaseDB,
    getAllUsers,
    getAllHackathons,
    getUserById,
    getHackathonById,
    getUsers,
    getHackathons,
    addUser,
    addHackathon,
    deleteHackathon,
    deleteUser,
    getAllAccounts,
    getAccounts,
    getAccountById,
    addAccount,
    deleteAccount,
    getApiKey,
    updateUserByUsrname,
    getUsersByHackathonId,
    admitUser,

    // To be tested...
    sendEmail
};