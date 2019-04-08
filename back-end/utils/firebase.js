const { firebaseDB } = require('../config');

const testFirebaseDB = () => {

    firebaseDB.database.collection("users").get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data())
        })
    });
}

module.exports = {
    testFirebaseDB
}