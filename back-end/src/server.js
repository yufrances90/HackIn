const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const controllers = require("./controllers");

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send("Hello World!"));

app.post('/accounts', async (req, res) => {

    const newAccount = req.body;

    try {
        
        const response = await controllers.AccountController.saveNewAccount(newAccount);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get('/accountByUsrname', async (req, res) => {

    const { usrname } = req.query;

    if (!usrname || usrname.length === 0) {
        res.status(400).send("No usrname is provided");
        return;
    }

    try {

        const response = await controllers.AccountController.getAccountByUsrname(usrname);

        if (response.length === 0) {
            res.status(404).send("No record is found!");
        } else {
            res.status(200).send(JSON.stringify(response[0]));
        }
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.post('/hackathons', async (req, res) => {

    const newHackathon = req.body;

    try {

        const response = await controllers.HackathonController.saveNewHackathon(newHackathon);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get('/hackathons', async (req, res) => {

    try {

        const response = await controllers.HackathonController.getAllHackathons();

        res.status(200).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/hackathonById/:hackathonId", async (req, res) => {

    const { hackathonId } = req.params;

    try {

        const response = await controllers.HackathonController.getHackathonById(hackathonId);

        res.status(200).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/coordinatesByAddress", async (req, res) => {

    const { address } = req.query;

    try {

        const response = await controllers.UtilController.getCoordinatesByAddress(address);

        res.status(200).send(JSON.stringify(response));
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/googleApiKey", (req, res) => {
    res.status(200).send(controllers.UtilController.getGoogleMapApiKey());
});

app.get("/userByUsrname", async (req, res) => {

    const { usrname } = req.query;

    if(!usrname) {
        res.status(400).send("No usrname is provided");
    }

    try {

        const response = await controllers.UserController.getUserByUsrname(usrname);

        if (response.length > 0) {
            res.status(200).send(JSON.stringify(response));
        } else {
            res.status(404).send(`No user is found for username: ${usrname}`);
        }
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.post("/users", async (req, res) => {

    const data = req.body;

    try {

        const response = await controllers.UserController.saveNewUser(data);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.put("/users/:userId", async (req, res) => {

    const { userId } = req.params;

    const { userByHackathon, hackathonId } = req.body;

    try {

        const response = await controllers.UserController.updateUserByUsrname(
            userId,
            userByHackathon,
            hackathonId 
        );

        res.status(204).send(JSON.stringify(response));

    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        console.error(error);

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/usersByHackathon", async (req, res) => {

    const { hackathonId } = req.query;

    if(!hackathonId) {
        res.status(400).send("No hackathon id is provided");
    }

    try {

        const response = await controllers.UserController.getUsersByHackathon(hackathonId);

        res.status(200).send(JSON.stringify(response));
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        console.error(error);

        res.status(500).send(JSON.stringify(error));
    }
});

app.put("/admitUser", async (req, res) => {

    const { userId, hackathonId, acceptedStatus } = req.query;

    const isAccepted = acceptedStatus === "true";

    try {

        const response = 
            await controllers.UserController.admitUser(userId, hackathonId, isAccepted);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        console.error(error);

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/testingBarcode", async(req, res) => {

    const text = "Hello";

    const response = await controllers.UtilController.generateBarcodePNG(text);  

    const stream = fs.createReadStream(response);

    stream.on('open', () => {
        res.setHeader("Content-Type", "image/png");
        stream.pipe(res);
    });

    stream.on('error', () => {
        res.setHeader("Content-Type", "text/html");
        res.status(404).end("Not found!");
    });

//    res.send(JSON.stringify(response));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));