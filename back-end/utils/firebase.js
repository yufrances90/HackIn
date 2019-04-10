const { firebaseConfig } = require('../config');

const userCollectionName = "users";
const hackathonCollectionName = "hackathons";

const db = firebaseConfig.database;

const getCollection = (collectionName) => {
    return db.collection(collectionName);
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

const addUser = async (newUser) => {
    return await add(userCollection, newUser);
}

const deleteUser = async (userId) => {
    return await deleteById(userCollection, userId);
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

const addHackathon = async (newHackathon) => {
    return await add(hackathonCollection, newHackathon);
}

const deleteHackathon = async (hackathonId) => {
    return await deleteById(hackathonCollection, hackathonId);
}

/*
    Private methods
*/

const deleteById = async (collection, id) => {
    return await collection.doc(id).delete();
}

const add = async (collection, newRecord) => {

    const ref = await collection.add(newRecord);

    return ref.id;
}

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
    getHackathons,
    addUser,
    addHackathon,
    deleteHackathon,
    deleteUser
}