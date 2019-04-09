const { firebaseConfig } = require('../config');

const userCollectionName = "users";
const hackathonCollectionName = "hackathons";

const getCollection = (collectionName) => {
    return firebaseConfig.database.collection(collectionName);
}

const userCollection = getCollection(userCollectionName);
const hackathonCollection = getCollection(hackathonCollectionName);

const testFirebaseDB = () => {

    userCollection.get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
        });
    });

    hackathonCollection.get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
        })
    })
}

module.exports = {
    testFirebaseDB
}