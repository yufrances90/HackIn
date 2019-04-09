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

    hackathonCollection.where("name", "==", "AthenaHacks").get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
        });
    })
}

const getAllUsers = async () => {
    return await get(userCollection);
}

const getUserById = async (id) => {
    return await getById(userCollection, id);
}

const getUsers = async (attr, op, value) => {
    return await get(userCollection, attr, op, value);
}

const getAllHackathons = async () => {
    return await get(hackathonCollection);
}

const getHackathonById = async (id) => {
    return await getById(hackathonCollection, id);
}

const getHackathons = async (attr, op, value) => {
    return await get(hackathonCollection, attr, op, value);
}

/*
    Private methods
*/

const get = async (collection, attr=null, op=null, value=null) => {

    const targetCollection = (attr == null)? 
        collection : 
        collection.where(attr, op, value);

    const snapshot = await targetCollection.get();   
    
    let elements = [];

    snapshot.forEach(doc => {

        const element = doc.data();

        elements.push(element);
    });

    return elements;
}

const getById = async (collection, id) => {

    const snapshot = await collection.doc(id).get();

    return (snapshot.exists)? snapshot.data() : null;
}

module.exports = {
    testFirebaseDB,
    getAllUsers,
    getAllHackathons,
    getUserById,
    getHackathonById,
    getUsers,
    getHackathons
}