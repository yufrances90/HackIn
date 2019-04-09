const { firebaseConfig } = require('../config');

const userCollectionName = "users";
const userCollection = firebaseConfig.database.collection(userCollectionName);

const testFirebaseDB = () => {

    userCollection.get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
        });
    });
}

module.exports = {
    testFirebaseDB
}