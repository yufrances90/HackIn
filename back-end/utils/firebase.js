const { firebaseConfig } = require('../config');

const USER_COLLECTION_NAME = "users";

const testFirebaseDB = () => {

    firebaseConfig.database.collection(USER_COLLECTION_NAME).get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
        });
    });
}

module.exports = {
    testFirebaseDB
}