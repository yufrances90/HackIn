const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceAccountKey.json");

const databaseURL = process.env.DB_URL;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL
});

admin.database.enableLogging(true);

const database = admin.database();

module.exports = {
    database
};