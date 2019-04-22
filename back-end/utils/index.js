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
    deleteAccount
} = require('./firebase');

const {
    getApiKey
} = require('./googleMap');

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
    getApiKey
};