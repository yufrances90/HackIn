const { firebaseConfig } = require('../config');

const userCollectionName = "users";
const hackathonCollectionName = "hackathons";
const accountCollectionName = "accounts";

const db = firebaseConfig.database;

const getCollection = (collectionName) => {
    return db.collection(collectionName);
}

const userCollection = getCollection(userCollectionName);
const hackathonCollection = getCollection(hackathonCollectionName);
const accountCollection = getCollection(accountCollectionName);

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

const getAllAccounts = async () => {
    return await get(accountCollection);
}

const getAccountById = async (id) => {
    return await getById(id);
}

const getAccounts = async (attr, op, value) => {
    return await get(accountCollection, attr, op, value);
}

const addAccount = async (newAccount) => {
    return await add(accountCollection, newAccount);
}

const deleteAccount = async (accountId) => {
    return await deleteById(accountCollection, accountId);
}

const updateUserByUsrname = async (
    userId,
    userByHackathon, 
    hackathonId
) => {

    const key = `hackathons.${hackathonId}`;

    return await userCollection.doc(userId).update({
        [key]: userByHackathon
    });
}

const getUsersByHackathonId = async (hackathonId) => {

    const key = `hackathons.${hackathonId}.hackathonId`;

    return await getUsers(key, "==", hackathonId);
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

        const element = {
            ...doc.data(),
            _id: doc.id
        };

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
    deleteUser,
    getAllAccounts,
    getAccountById,
    getAccounts,
    addAccount,
    deleteAccount,
    updateUserByUsrname,
    getUsersByHackathonId
}